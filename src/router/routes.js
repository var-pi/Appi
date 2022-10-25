/*

Genereerib URL-i ja faili asukoha tee iga lehekülje jaoks.

*/

import pageNames from "./pageNames.js";

const toPath = (name) => `/src/pages/${name}.html`;
const toRoute = (name) => "/" + name;

export let pages = {};
for (const name of pageNames)
  pages[name] = {
    path: toPath(name),
    route: toRoute(name),
  };

