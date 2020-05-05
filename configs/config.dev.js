/**
 *  Created by daiwenjuan on 2020/5/5 下午6:22.
 */
const path=require('path')
module.exports = {
  devtool: "inline-source-map",
  devServer:{
    contentBase:path.resolve(__dirname, "../test/dist")
  }
};
