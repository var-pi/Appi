// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c

import routes from "./routes.js";

const rootDiv = document.getElementById("root");

export const router = {
  routes,
  push: (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.data = router.routes[window.location.pathname];
  },
};

router.push("/");

