import { all } from "redux-saga/effects";

import register from "./register";
import login from "./login";
import logout from "./logout";
import isAuthenticated from "./isAuthenticated";
import courses from "./courses";
import getData from "./getData";
import subscribe from "./subscribe";
import edit from "./edit";

export default function* root() {
  yield all([
    register(),
    login(),
    isAuthenticated(),
    logout(),
    courses(),
    getData(),
    subscribe(),
    edit(),
  ]);
}
