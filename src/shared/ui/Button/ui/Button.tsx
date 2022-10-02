import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonSize, ButtonTheme } from 'shared/enums';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
