const webpack = require('webpack');
const commonPaths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.mdx$/,
        ignore: /node_modules/,
        use: ['babel-loader', 'mdx-deck/loader'],
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, '..', 'assets'),
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '',
        },
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, '..', 'assets'),
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '',
        },
      },
      {
        test: /\.jpg$/,
        include: path.join(__dirname, '..', 'assets'),
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '',
        },
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
  ],
};
