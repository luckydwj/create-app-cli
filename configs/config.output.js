/**
 *  Created by daiwenjuan on 2020/4/29 下午1:49.
 */
const path = require("path");
module.exports = function() {
  return {
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "../test/dist")
    }
  };
};
// module.exports = function(config) {
//   config.output
//     .path(path.resolve(__dirname, "../test/dist"))
//     .filename("bundle.js");
// };
