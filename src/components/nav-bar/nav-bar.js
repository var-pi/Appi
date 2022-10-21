import pages from "../../router/list.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let buttons = "";
    for (const name of pages) {
      buttons += `<button id="${name}">${name}</button>`;
    }
    console.warn(buttons);

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
          ${buttons}
        </div>
        `;
  }
}
customElements.define("nav-bar", NavBar);

