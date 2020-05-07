/**
 *  Created by daiwenjuan on 2020/5/2 下午1:28.
 */
import _ from "lodash";
import Print from "./print";

function component() {
  var element = document.createElement("div");
  console.log("=====sdfsd======");
  // lodash 是由当前 script 脚本 import 进来的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.onclick = Print.bind(null, "Hello webpack!");

  return element;
}

document.body.appendChild(component());
