/**
 *  Created by daiwenjuan on 2020/4/29 下午1:49.
 */
const path = require("path");
module.exports = {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
