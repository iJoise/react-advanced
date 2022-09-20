import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';


const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<AppRouter/>
			<button onClick={toggleTheme}>TOGGLE</button>
		</div>
	);
};

export default App;
