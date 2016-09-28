var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname,
      filename: 'target/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: { presets: [ 'es2015', 'react' ] }
        }
      ]
    },
    devServer: {
  		// do not print bundle build stats
  		noInfo: true,
  		// enable HMR
  		hot: true,
  		// embed the webpack-dev-server runtime into the bundle
  		inline: true,
  		// serve index.html in place of 404 responses to allow HTML5 history
  		historyApiFallback: true,
  		port: "8080",
  		host: "127.0.0.1"
  	},
    plugins: [
  		new webpack.NoErrorsPlugin(),
  		new webpack.HotModuleReplacementPlugin(),
  		new HtmlWebpackPlugin({
  			template: './index.html'
  		})
  	]
};
