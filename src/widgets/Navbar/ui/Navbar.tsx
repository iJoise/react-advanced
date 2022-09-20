import React from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/enums';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
				>
					Главная
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/about'}
				>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}
