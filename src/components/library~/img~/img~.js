import CustomElement from "/src/components/customElement.js";

class LibraryImage extends CustomElement {
  constructor() {
    super("/library~/img~", "img~");
  }
}

customElements.define("library-img", LibraryImage);

