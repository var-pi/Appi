/*

Inspiratsioon : https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c

Tagab võimaluse muuta vaadatavat lehekülge URL-i põhjal.

*/

import { pages } from "./routes.js";

const rootDiv = document.getElementById("root");

const loadHome = () => {
  document.location.href = window.location.origin + "/#/home";
};

const loadPath = async () => {
  const page = pages[window.location.hash.substring(2)];
  console.log(page);
  if (page) {
    rootDiv.innerHTML = await (await fetch(page.path)).text();
    const module = await import("/src/pages" + page.route + page.route + ".js");
    module?.default?.(this);
  } else loadHome();
};

window.addEventListener("hashchange", loadPath);

loadPath();

