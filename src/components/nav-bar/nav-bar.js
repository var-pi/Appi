/*

Loob jada kõigi lehekülgede linkidega.

*/

import { pages } from "/src/core/router/routes.js";

export default function (el) {
  const containerDiv = document.getElementById("container");

  for (const name in pages) {
    const button = document.createElement("button");
    button.onclick = () => {
      location.href = `/#${pages[name].route}`;
    };
    button.innerHTML = pages[name].displayName;
    containerDiv.appendChild(button);
  }
}

