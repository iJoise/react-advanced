import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/enums';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const { t } = useTranslation();

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, [setIsAuthModal]);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
		</div>
	);
};
