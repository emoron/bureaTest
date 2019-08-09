var webpack = require('webpack');
var path = require('path');
const prod = process.env.NODE_ENV === 'production'


module.exports = {
  mode: prod ? 'production' : 'development',
  devServer: {
     contentBase: path.join(__dirname, 'public'),
     compress: true,
     port: 9000
 },
  entry: [
  //  'script!jquery/dist/jquery.min.js',
  //  'script!foundation-sites/dist/foundation.min.js',
   './app/app.jsx'
  //    './app/src/demo.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  module: {
    rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react', 'stage-2'],
                }
              }
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
               test: /\.(jpg|png|gif|svg)$/,
               use: {
                   loader: 'file-loader',
                    options: {

                        name: '[path][name].[ext]',
                  
                    }
               }
             }
          ]
  }
}
