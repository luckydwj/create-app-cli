/**
 *  Created by daiwenjuan on 2020/5/5 下午6:22.
 */
const path = require("path");
module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  optimization: {
    usedExports: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../test/dist"),
    hot: true
  }
};
