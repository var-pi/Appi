import pages from "./list.js";

const toRoute = (name) => `/src/pages/${name}.html`;

let routes = {};
for (const name of pages) {
  switch (name) {
    case "home":
      routes["/"] = toRoute(name);
      break;
    default:
      routes["/" + name] = toRoute(name);
      break;
  }
}

export default routes;

