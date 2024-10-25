const path = require("path");
// const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../frontend/static/frontend/"),
    filename: "main.js",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {loader: "babel-loader"}
    }]
  },
  optimization: {
    minimize: true,
  },
  stats:
    {errorDetails: true}
  };