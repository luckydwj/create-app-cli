/**
 *  Created by daiwenjuan on 2020/5/2 下午1:28.
 */
import _ from "lodash";
import "./style.css";
import Icon from "./image/test.jpg";
import printMe from "./print";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
