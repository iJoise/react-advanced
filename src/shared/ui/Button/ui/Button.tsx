import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ThemeButton } from 'shared/enums';
import cls from './Button.module.scss';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode,
	theme?: ThemeButton
}

export const Button = (props: ButtonPropsType) => {
	const {
		className,
		children,
		theme,
		...restProps
	} = props;

	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			type="button"
			{...restProps}
		>
			{children}
		</button>
	);
};
