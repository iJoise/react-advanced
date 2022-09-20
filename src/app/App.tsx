import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { AppRouter } from 'app/router';


const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter/>
		</div>
	);
};

export default App;
