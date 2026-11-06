const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
        use: ['style-loader', 'css-loader'],
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
      title: 'The Geometry of Cloth',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './src/cutters/index.html',
      filename: 'cutters/index.html',
      chunks: ['cutters'],
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3001,
  },
};
