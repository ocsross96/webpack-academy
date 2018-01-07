const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css"),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
