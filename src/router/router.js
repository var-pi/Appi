// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c

import { pages } from "./routes.js";

const rootDiv = document.getElementById("root");

const loadHome = () => {
  document.location.href = window.location.origin + "/#/home";
};

const loadPath = () => {
  const page = pages[window.location.hash.substring(2)];
  if (page) rootDiv.data = page.path;
  else loadHome();
};

window.addEventListener("hashchange", loadPath);

loadHome();

