/**
 *  Created by daiwenjuan on 2020/5/6 上午11:54.
 */
const webpack = require("webpack");
module.exports = function(plugins) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
};
