import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions } from 'entities/Profile';
import { ButtonTheme } from 'shared/enums';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly';
import {
	updateProfileData,
} from 'entities/Profile/model/services/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { className } = props;

	const { t } = useTranslation();
	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t('Профиль')} />
			{readonly ? (
				<Button
					className={cls.editBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEdit}
				>
					{t('Редактировать')}
				</Button>
			) : (
				<>
					<Button
						className={cls.editBtn}
						theme={ButtonTheme.OUTLINE_RED}
						onClick={onCancelEdit}
					>
						{t('Отменить')}
					</Button>
					<Button
						className={cls.saveBtn}
						theme={ButtonTheme.OUTLINE}
						onClick={onSave}
					>
						{t('Сохранить')}
					</Button>
				</>
			)}
		</div>
	);
};
