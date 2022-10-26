import paths from "./componentNames.js";
import CustomElement from "/src/components/customElement.js";

for (const path of paths) {
  class Custom extends CustomElement {
    constructor() {
      super(path);
    }
  }

  const name = path.split("/").reverse()[0];

  customElements.define(name, Custom);
}

