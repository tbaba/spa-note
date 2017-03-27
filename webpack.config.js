module.exports = {
  entry: { js: './src/main.js' },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  }
}
