/**
 *  Created by daiwenjuan on 2020/4/30 下午1:19.
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
};
