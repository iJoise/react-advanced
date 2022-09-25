import React, { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar/>
				<div className="content-page">
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	);
};

export default App;
