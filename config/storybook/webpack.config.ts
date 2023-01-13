import webpack, { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	return {
		...config,
		module: {
			rules: config.module.rules.map((rule: RuleSetRule) => {
				if (/svg/.test(rule.test as string)) {
					return {
						...rule,
						exclude: /\.svg$/i,
					};
				}

				return rule;
			})
				.concat({
					test: /\.svg$/,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
				})
				.concat({
					...buildCssLoader(true),
				}),
		},
		plugins: [
			...config.plugins,
			new DefinePlugin({
				__IS_DEV__: true,
				__API__: '',
			}),
		],
		resolve: {
			...config.resolve,
			modules: [paths.src, 'node_modules'],
			extensions: [...config.resolve.extensions, '.tsx', '.ts'],
		},
	} as Configuration;
};
