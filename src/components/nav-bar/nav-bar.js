import { pages } from "../../router/routes.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let aTagList = "";
    for (const name in pages) {
      aTagList += `<a href="/#${pages[name].route}">${name}</a>`;
    }

    this.innerHTML = `
        <style>
            #container {
                position: fixed;
                top: 0px;
                display: flex;
                justify-content: center;
                width: 100vw;
            }
        </style>
        <div id="container">            
          ${aTagList}
        </div>
        `;
  }
}
customElements.define("nav-bar", NavBar);

