const path = require('path');
const SRC_DIR = 'client/src';
const DIST_DIR = 'public';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, SRC_DIR, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, DIST_DIR),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        include: [
          path.resolve(__dirname, SRC_DIR)
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]

  }
};