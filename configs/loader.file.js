/**
 *  Created by daiwenjuan on 2020/4/30 下午1:36.
 */

module.exports = function(config) {
  config.module
    .test(/\.css$/)
    .use("file-loader")
    .loader("style-loader");
};
