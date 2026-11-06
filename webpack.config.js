const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      bundle: './src/index.js',
      cutters: './src/cutters/index.js',
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          test: /\.woff2$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[name].[contenthash][ext]' },
        },
        {
          test: /[\\/]src[\\/]cutters[\\/]files[\\/]/,
          type: 'asset/resource',
          generator: {
            filename: ({ filename }) => filename.replace(/^src\//, ''),
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['bundle'],
      }),
      new HtmlWebpackPlugin({
        template: './src/cutters/index.html',
        filename: 'cutters/index.html',
        chunks: ['cutters'],
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })] : []),
    ],
    devServer: {
      static: './dist',
      hot: true,
      port: 3001,
    },
  };
};
