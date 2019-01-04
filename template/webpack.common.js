const path = require('path');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/public_api.ts',
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  },
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: '__TEMPLATE_NAME__',
      libraryTarget: 'umd'
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(['dist'])
  ] 
};