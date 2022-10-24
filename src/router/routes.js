import pageNames from "./list.js";

const toRoute = (name) => `/src/pages/${name}.html`;

// let routes = {};
// for (const name of pages) {
//   switch (name) {
//     case "home":
//       routes["/"] = toRoute(name);
//       break;
//     default:
//       routes["/" + name] = toRoute(name);
//       break;
//   }
// }

export let pages = {};
for (const name of pageNames) {
  let page = {};
  page.path = toRoute(name);
  // switch (name) {
  //   case "home":
  //     page.route = "/";
  //     break;
  //   default:
  //     page.route = "/" + name;
  //     break;
  // }
  page.route = "/" + name;
  pages[name] = page;
}

console.log(pages);

// let _paths = [];
// for (const path in routes) {
//   _paths.push(path);
// }
// export const paths = _paths;

// export default routes;

