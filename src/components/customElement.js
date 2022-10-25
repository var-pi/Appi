/*

Seob samanimelised HTML, CSS ja JS failid ühte klassi.

*/

export default class CustomElement extends HTMLElement {
  constructor(folderPath) {
    super();
    const filePath = folderPath + "/" + folderPath.split("/").reverse()[0];

    this.addHtml = async () => {
      this.innerHTML = await fetch(filePath + ".html").then((r) => r.text());
    };

    this.addStyles = () => {
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = filePath + ".css";
      document.head.appendChild(link);
    };

    this.addScript = () => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = filePath + ".js";
      document.head.appendChild(script);
    };
  }

  async connectedCallback() {
    await this.addHtml();
    this.addStyles();
    this.addScript();
  }
}

