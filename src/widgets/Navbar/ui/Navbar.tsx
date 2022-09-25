import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/enums';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
				>
					{t('Главная')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
				>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
