// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const ASSET_PATH = production ? '/' : '';

module.exports = {
  entry: { index: path.resolve(__dirname, './src/index.js') },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: ASSET_PATH || 'auto',
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: !production,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new NodePolyfillPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  devServer: {
    compress: true,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  mode: production ? 'production' : 'development',
};
