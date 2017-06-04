const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = Object.assign({}, {
  target: 'node',
  entry: './containers/Server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../functions/build'),
    libraryTarget: 'commonjs2',
  }
}, commonConfig);