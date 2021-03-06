/**
 *  Created by daiwenjuan on 2020/5/5 下午4:17.
 */
module.exports = function() {
  const plugins = [];
  require("./plugin.html")(plugins);
  require("./plugin.clean")(plugins);
  require("./plugin.hashedmodule")(plugins);
  require("./plugin.hotmodule")(plugins);
  require("./plugin.namedmodules")(plugins);
  return { plugins };
};
