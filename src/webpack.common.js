const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      'firebase-database': path.resolve(__dirname, '../functions/firebase-database'),
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};