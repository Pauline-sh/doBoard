const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/src/index.ts',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    modules: ['server', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/server'),
    publicPath: '/',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
