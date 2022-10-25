// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c

import { pages } from "./routes.js";

const rootDiv = document.getElementById("root");

const loadHome = () => {
  document.location.href = window.location.origin + "/#/home";
  // loadPath();
};

const loadPath = async () => {
  const page = pages[window.location.hash.substring(2)];
  if (page) rootDiv.innerHTML = await (await fetch(page.path)).text();
  else loadHome();
};

window.addEventListener("hashchange", loadPath);

loadHome();

