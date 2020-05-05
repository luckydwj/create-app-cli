/**
 *  Created by daiwenjuan on 2020/5/5 下午4:35.
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = function(plugins) {
  plugins.push(new CleanWebpackPlugin());
};
