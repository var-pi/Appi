export default class CustomElement extends HTMLElement {
  constructor(pathInComponents, name) {
    super();
    this.base = "/src/components";
    this.path = this.base + pathInComponents;
    this.name = name;
    this.getHtml = async () =>
      await fetch(`${this.path}/${this.name}.html`).then((r) => r.text());
    this.addStyles = () => {
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = `${this.path}/${this.name}.css`;
      document.head.appendChild(link);
    };
  }

  async connectedCallback() {
    this.addStyles();
    this.innerHTML = await this.getHtml();
  }
}

