/* eslint-disable */
const devMode = process.argv[1].indexOf("webpack-dev-server") !== -1;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          devMode
            ? "style-loader" // inject CSS into html
            : MiniCssExtractPlugin.loader, // extract CSS in single file
          "css-loader", // translates CSS into CommonJS modules
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("autoprefixer")];
              }
            }
          },
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      // generate html file without manually inject .js bundle
      template: "index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
};
