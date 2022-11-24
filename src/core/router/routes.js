/*

Genereerib URL-i ja faili asukoha tee iga lehekülje jaoks.

*/

import pageNames from "/src/pages/names.js";

const toPath = (name) => `/src/pages/${name}/${name}.html`;
const toRoute = (name) => "/" + name;

export let pages = {};
for (const name of pageNames)
  pages[name] = {
    path: toPath(name),
    route: toRoute(name),
  };

