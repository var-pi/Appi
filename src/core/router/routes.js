/*

Genereerib URL-i ja faili asukoha tee iga lehekülje jaoks.

*/

import pageNames from "/src/pages/names.js";

const toPath = (ref) => `/src/pages/${ref}/${ref}.html`;
const toRoute = (ref) => "/" + ref;

export let pages = {};
for (const { ref, displayName } of pageNames)
  pages[ref] = {
    path: toPath(ref),
    route: toRoute(ref),
    displayName,
  };

