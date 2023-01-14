import path from 'path';
import type { RuleSetRule, Configuration, WebpackPluginInstance } from 'webpack';
import { DefinePlugin } from 'webpack';
import type { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const buildPath: BuildPaths = {
	entry: '',
	build: '',
	html: '',
	src: path.resolve(__dirname, '..', '..', 'src'),
};

interface Resolve {
	modules: string[];
	extensions: string[];
}

interface Module {
	rules: RuleSetRule[];
}

interface Config extends Configuration {
	plugins: WebpackPluginInstance[];
	resolve: Resolve;
	module: Module;
}

export default ({ config }: { config: Config }) => ({
	...config,
	module: {
		rules: config.module.rules.map((rule: RuleSetRule) => {
			if (RegExp(rule.test as RegExp)
				.test('.svg')) {
				return {
					...rule,
					exclude: /\.svg$/i,
				};
			}

			return rule;
		})
			.concat({
				test: /\.svg$/i,
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
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify(''),
		}),
	],
	resolve: {
		...config.resolve,
		modules: [buildPath.src, ...config.resolve.modules],
		extensions: [...config.resolve.extensions, '.tsx', '.ts'],
	},
} as Configuration);
