/**
 *  Created by daiwenjuan on 2020/4/29 下午1:49.
 */
const path = require("path");
module.exports = function() {
  return {
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "../test/dist")
    }
  };
};
// 当打包library时配置
function libraryOutPut() {
  return {
    library: "webpackNumbers",
    libraryTarget: "umd"
  };
}
