import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options
  return {
    mode,
    entry: paths.entry,
    // entry: { random: path.resolve(__dirname, 'src', 'index.tsx') }
    // можно указать объект и перечислить все названия и пути для файлов
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}
