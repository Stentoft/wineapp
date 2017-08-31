var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['babel-polyfill','./src/scripts/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','es2015', 'stage-0'],
            plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "less-loader", options: {
                strictMath: false,
                noIeCompat: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  }
};
