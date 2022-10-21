class LibraryImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <style>
          img {
            border-radius: 15px;
          }
          </style>
            <img id="library" src="/src/assets/images/library~.jpg" alt="" />
        `;
  }
}
// , { extends: "img" }
customElements.define("library-img", LibraryImage);

