const ExtractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/main.js',
    styles: './src/main.css',
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
          publicPath: __dirname + '/public',
        }),
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-easy-import')({ glob: true }),
        ],
      },
    }),
    new ExtractTextPlugin('./styles.css'),
  ],
  devServer: {
    contentBase: __dirname + '/public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  }
}
