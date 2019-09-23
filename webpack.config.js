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
            ? {
                loader: "style-loader", // inject CSS into html
                options: {
                  sourceMap: true
                }
              }
            : MiniCssExtractPlugin.loader, // extract CSS in single file
          {
            loader: "css-loader", // translates CSS into CommonJS modules
            options: {
              sourceMap: true
            }
          },

          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
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
