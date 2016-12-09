import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import data from './scripts/data';

module.exports = {
  entry: './scripts/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!postcss'),
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?limit=100000&&mimetype=application/font-woff',
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader?limit=100000&&mimetype=application/font-woff2',
      },
      { test: /\.(png|jpg)$/,
        loader: 'file-loader?name=/assets/[name].[ext]',
      },
      { test: /\.ico$/,
        loader: 'file-loader?name=/[name].[ext]',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes),
  ],
};
