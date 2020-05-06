/**
 *  Created by daiwenjuan on 2020/5/6 下午3:29.
 */
module.exports = {
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
