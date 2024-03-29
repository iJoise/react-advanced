import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = () => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(() => Object.values(routeConfig)
		.filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

	return (
		<Routes>
			{routes.map(({
				element,
				path,
			}) => (
				<Route
					key={path}
					path={path}
					element={(
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">
								{element}
							</div>
						</Suspense>
					)}
				/>
			))}
		</Routes>
	);
};
