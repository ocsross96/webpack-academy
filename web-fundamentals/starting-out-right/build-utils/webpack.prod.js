const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: "source-map",
  plugins: [
    new ExtractTextWebpackPlugin("style.css")
  ]
}