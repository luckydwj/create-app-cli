/**
 *  Created by daiwenjuan on 2020/4/29 下午1:48.
 */

module.exports = function() {
  const entry = require("./config.entry")();
  const devConfig = require("./config.dev");
  const rules = require("./loader")();
  const plugins = require("./plugins")();
  const output = require("./config.output")();
  return {
    ...entry,
    ...devConfig,
    ...output,
    ...rules,
    ...plugins
  };
};
