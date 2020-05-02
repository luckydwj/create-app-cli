/**
 *  Created by daiwenjuan on 2020/5/2 下午1:28.
 */
import _ from "lodash";
import "./style.css";
function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
