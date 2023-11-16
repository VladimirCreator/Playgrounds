/* Initially Modified at 1:45 AM on Wed 15 Nov 2023 */

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  return {
    entry: {
      bundle: ''
    },
    output: {
      path: path.resolve(__dirname, '.build'),
      filename: '[name].[contenthash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: env.TITLE_FOR_CRUD_FOR_A_X, template: 'index.html'
      }),
      new MiniCssExtractPlugin()
    ]
  }
}
