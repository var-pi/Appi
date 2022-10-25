import { pages } from "../../router/routes.js";
import CustomElement from "/src/components/customElement.js";

class NavBar extends CustomElement {
  constructor() {
    super("/nav-bar", "nav-bar");
  }

  async connectedCallback() {
    await super.connectedCallback();

    let aTagList = "";
    for (const name in pages)
      aTagList += `<a href="/#${pages[name].route}">${name}</a>`;

    const containerDiv = document.getElementById("container");

    containerDiv.innerHTML = aTagList;
  }
}

customElements.define("nav-bar", NavBar);

