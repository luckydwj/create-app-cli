/**
 *  Created by daiwenjuan on 2020/5/5 下午4:19.
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = function(plugins) {
  plugins.push(
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  );
};
