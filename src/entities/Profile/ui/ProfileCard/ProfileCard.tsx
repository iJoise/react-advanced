import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextTheme } from 'shared/enums';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error: string | undefined;
	readonly: boolean | undefined;
	onChangeLastname?: (value?: string) => void;
	onChangeFirstname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
	className,
	data,
	isLoading,
	error,
	readonly,
	onChangeFirstname,
	onChangeLastname,
	onChangeAge,
	onChangeCity,
	onChangeAvatar,
	onChangeUsername,
	onChangeCountry,
	onChangeCurrency,
}: ProfileCardProps) => {
	const { t } = useTranslation();
	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('Попробуй обновить страницу')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.data}>
				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar src={data.avatar} alt={t('avatar')} />
					</div>
				)}
				<Input
					value={data?.first}
					placeholder={t('Ваше имя')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeFirstname}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваша фамилия')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeLastname}
				/>
				<Input
					value={data?.age}
					placeholder={t('Ваша возраст')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeAge}
				/>
				<Input
					value={data?.city}
					placeholder={t('Ваша город')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeCity}
				/>
				<Input
					value={data?.username}
					placeholder={t('Введите имя ползьвателя')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeUsername}
				/>
				<Input
					value={data?.avatar}
					placeholder={t('Введите ссылку на аватар')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeAvatar}
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
