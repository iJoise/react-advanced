import { render, screen } from '@testing-library/react';
import { ButtonTheme } from 'shared/enums';
import { Button } from './Button';

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Test clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});
