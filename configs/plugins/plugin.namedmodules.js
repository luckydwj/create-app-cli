/**
 *  Created by daiwenjuan on 2020/5/6 上午11:53.
 */
const webpack = require("webpack");
module.exports = function(plugins) {
  // 模块热替换 开发环境 显示模块路径名称
  plugins.push(new webpack.NamedChunksPlugin());
};
