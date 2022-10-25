import CustomElement from "/src/components/customElement.js";

class LibraryImage extends CustomElement {
  constructor() {
    super("/src/components/library/library-img");
  }
}

customElements.define("library-img", LibraryImage);

