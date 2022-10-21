import { router } from "../../router/router.js";

document.getElementById("home").onclick = () => {
  router.push("/");
};

document.getElementById("library~").onclick = () => {
  router.push("/library~");
};

