const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = Object.assign({}, {
  entry: './containers/Client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '../public/assets')
  }
}, commonConfig);