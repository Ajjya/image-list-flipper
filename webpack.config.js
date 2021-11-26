const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'image-list-flipper.js',
    library: {
      name: 'imageListFlipper',
      type: 'umd',
    },
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
};