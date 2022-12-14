import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme, TextTheme } from 'shared/enums';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	useEffect(() => () => {
		dispatch(loginActions.clearState());
	}, [dispatch]);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({
			username,
			password,
		}));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={t('?????????? ??????????????????????')} />
				{
					error && (
						<Text text={t('???? ?????????? ???????????????? ?????????? ?????? ????????????')} theme={TextTheme.ERROR} />
					)
				}
				<Input
					autofocus
					className={cls.input}
					placeholder={t('?????????????? username')}
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					className={cls.input}
					placeholder={t('?????????????? ????????????')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.loginBtn}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('??????????')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
