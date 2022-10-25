import CustomElement from "/src/components/customElement.js";

class NavBar extends CustomElement {
  constructor() {
    super("/src/components/nav-bar");
  }
}

customElements.define("nav-bar", NavBar);

