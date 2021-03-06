// Import pages.
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


export default [
  {
    path: "/",
    to: "/",
    name: "Home",

    exact: true,
    hasMenu: false,
    restrictedRoute: false,
    enabled: true,
    component: Home,
    permission: true,
  },
  {
    path: "/login",
    to: "/login",
    name: "Login",

    exact: true,
    hasMenu: false,
    restrictedRoute: false,
    enabled: true,
    component: Login,
    permission: true,
  },
  {
    path: "/register",
    to: "/register",
    name: "Register",

    exact: true,
    hasMenu: false,
    restrictedRoute: false,
    enabled: true,
    component: Register,
    permission: true,
  },
];
