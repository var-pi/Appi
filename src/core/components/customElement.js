/*

Seob samanimelised HTML, CSS ja JS failid ühte klassi.

*/

export default class CustomElement extends HTMLElement {
  constructor(folderPath) {
    super();
    const name = folderPath.split("/").reverse()[0];
    const filePath = folderPath + "/" + name;

    this.addHtml = async () => {
      this.innerHTML = await fetch(filePath + ".html").then((r) => r.text());
    };

    this.addStyles = () => {
      const links = [...document.head.getElementsByTagName("link")];
      const exists = links.some(
        (link) => link.href == window.location.origin + filePath + ".css"
      );
      if (exists) return;

      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = filePath + ".css";
      document.head.appendChild(link);
    };

    this.mount = async () => {
      await this.addHtml();
      this.addStyles();
      const module = await import(filePath + ".js");
      module?.default?.(this);
    };

    this.mount();
  }
}

