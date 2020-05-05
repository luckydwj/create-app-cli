/**
 *  Created by daiwenjuan on 2020/5/5 下午3:23.
 */

module.exports = function(rules) {
  rules.push({
    test: /.(png|svg|jpg|gif)/,
    use: ["file-loader"]
  });
};
