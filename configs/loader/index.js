/**
 *  Created by daiwenjuan on 2020/5/5 下午3:26.
 */

module.exports = function() {
  const rules = [];
  require("./loader.css")(rules);
  require("./loader.file")(rules);
  return {
    module: { rules }
  };
};
