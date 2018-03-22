const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  BUILD_DIR: path.resolve(__dirname, 'dist'),
  APP_DIR: path.resolve(__dirname, 'src'),
  SRC: path.resolve('./src'),
};

module.exports = {
  entry: {
    main: path.join(paths.APP_DIR, 'index.jsx'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
  },
  output: {
    path: paths.BUILD_DIR,
    filename: 'app/[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // generating html
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      chunksSortMode: 'dependency',
    }),
  ],
  devServer: {
    contentBase: paths.SRC,
    hot: true,
  },
  devtool: 'source-map',
};
