// class NavBar extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     let aTagList = "";
//     for (const name in pages) {
//       aTagList += `<a href="/#${pages[name].route}">${name}</a>`;
//     }

//     this.innerHTML = `
//         <style>
//             #container {
//                 position: fixed;
//                 top: 0px;
//                 display: flex;
//                 justify-content: center;
//                 width: 100vw;
//             }
//         </style>
//         <div id="container">
//           ${aTagList}
//         </div>
//         `;
//   }
// }
// customElements.define("nav-bar", NavBar);

import { pages } from "../../router/routes.js";
import CustomElement from "/src/components/customElement.js";

class NavBar extends CustomElement {
  constructor() {
    super("/nav-bar", "nav-bar");
  }

  async connectedCallback() {
    await super.connectedCallback();

    // let aTagList = "";
    // for (const name in pages) {
    //   aTagList += `<a href="/#${pages[name].route}">${name}</a>`;
    // }

    // setTimeout(() => {
    //   console.log(this.innerHTML);
    // }, 300);
    // setTimeout(() => {
    //   const containerDiv = document.getElementById("container");
    //   console.warn("containerDiv", containerDiv);
    //   containerDiv.innerHTML = aTagList;
    // }, 300);
  }
}

customElements.define("nav-bar", NavBar);

