/**
 *  Created by daiwenjuan on 2020/4/30 下午1:36.
 */
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// };

module.exports = function(config) {
  config.module
    .test(/\.css$/)
    .use("css-loader")
    .loader("css-loader");
};
