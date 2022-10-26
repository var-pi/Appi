import paths from "./paths.js";
import CustomElement from "/src/components/customElement.js";

for (const path of paths) {
  const name = path.split("/").reverse()[0];

  class Custom extends CustomElement {
    constructor() {
      super(path);
    }
  }

  customElements.define(name, Custom);
}

