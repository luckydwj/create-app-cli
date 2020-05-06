/**
 *  Created by daiwenjuan on 2020/4/29 下午1:48.
 */

module.exports = function commonConfig() {
  const entry = require("./config.entry")();
  const baseConfig = require("./config.base");
  const rules = require("./loader")();
  const plugins = require("./plugins")();
  const output = require("./config.output")();
  return {
    ...entry,
    ...baseConfig,
    ...output,
    ...rules,
    ...plugins
  };
};
