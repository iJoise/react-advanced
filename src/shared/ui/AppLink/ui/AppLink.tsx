import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { AppLinkTheme } from 'shared/enums';
import cls from './AppLink.module.scss';

interface AppLinkPropsType extends LinkProps{
	className?: string
	children?: ReactNode
	theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkPropsType) => {
	const {
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...restProps
	} = props;

	return (
		<Link
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...restProps}
		>
			{children}
		</Link>
	);
};
