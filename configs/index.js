/**
 *  Created by daiwenjuan on 2020/4/29 下午1:48.
 */
const Config = require("webpack-chain");
module.exports = function() {
  const config = new Config();
  require("./config.entry")(config);
  require("./config.output")(config);
  // require("./loader.file")(config);
  // require("./loader.css")(config);
  return config;
};
