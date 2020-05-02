/**
 *  Created by daiwenjuan on 2020/4/29 下午1:29.
 */
const path = require("path");
// module.exports = {
//   entry: {
//     app: "../test/src/index.js"
//   }
// };
module.exports = function(config) {
  const entrypath = path.resolve(__dirname, "../test/src/index.js");
  config.entry("app").add(entrypath);
};
