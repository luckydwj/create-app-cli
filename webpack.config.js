/**
 *  Created by daiwenjuan on 2020/4/29 下午1:25.
 */
const config = require("./configs")();
const conf = config.toConfig();
console.log("==========");
console.log(conf);
module.exports = conf;
