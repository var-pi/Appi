// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c

import { pages } from "./routes.js";

const rootDiv = document.getElementById("root");

export const router = {
  loadPath: () => {
    rootDiv.data = pages[window.location.hash.substring(2)].path;
  },
};

window.addEventListener("hashchange", router.loadPath);

