/**
 *  Created by daiwenjuan on 2020/5/6 下午2:52.
 */
const merge = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, require("./configs/config.prod"));
