/**
 *  Created by daiwenjuan on 2020/4/30 下午1:36.
 */
module.exports = function(rules) {
  rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  });
};
