/**
 *  Created by daiwenjuan on 2020/5/6 下午5:14.
 */
const webpack = require("webpack");
module.exports = function(plugins) {
  plugins.push(new webpack.HashedModuleIdsPlugin());
};
