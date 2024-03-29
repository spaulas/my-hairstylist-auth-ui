const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
    uniqueName: 'auth'
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/index",
        "./routes": "./src/exposed/routes",
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
