const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const outputPath = path.resolve(__dirname, '.npm');
module.exports = {
  entry: {
    index: './src/index.js',
  },
  externals: [nodeExternals()],
  target: 'node',
  output: {
    path: outputPath,
    filename: '[name].js',
    library: 'remd',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    // 加快搜索速度
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // cacheDirectory 缓存babel编译结果加快重新编译速度
        loader: 'babel-loader?cacheDirectory',
        // 只命中src目录里的js文件，加快webpack搜索速度
        include: path.resolve(__dirname, 'src')
      },
    ]
  },
  devtool: 'source-map',
};
