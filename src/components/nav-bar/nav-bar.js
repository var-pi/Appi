/*

Loob jada kõigi lehekülgede linkidega.

*/
console.warn("!!");
import { pages } from "../../router/routes.js";

export default function (el) {
  const containerDiv = document.getElementById("container");

  for (const name in pages) {
    const a = document.createElement("a");
    a.href = "/#" + pages[name].route;
    a.innerHTML = name;
    containerDiv.appendChild(a);
  }
}

