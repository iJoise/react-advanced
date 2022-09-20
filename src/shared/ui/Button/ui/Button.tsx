import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ThemeButton } from 'shared/enums';

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
	} = props

	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...restProps}
		>
			{children}
		</button>
	)
}
