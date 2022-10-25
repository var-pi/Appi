export default class CustomElement extends HTMLElement {
  constructor(pathInComponents, name) {
    super();
    this.name = name;
    this.base = "/src/components";
    this.path = this.base + pathInComponents;
    this.getHtml = async () =>
      await fetch(`${this.path}/${this.name}.html`).then((r) => r.text());
    this.addStyles = () => {
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = `${this.path}/${this.name}.css`;
      document.head.appendChild(link);
    };
    // this.addScript = () => {
    //   let script = document.createElement("script");
    //   script.type = "module";
    //   script.src = `${this.path}/${this.name}.js`;
    //   document.head.appendChild(script);
    // };
  }

  async connectedCallback() {
    this.addStyles();
    // this.addScript();
    this.innerHTML = await this.getHtml();
  }
}

