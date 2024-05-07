import { combineReducers } from "redux";

import userRegister from "./register";
import userLogin from "./login";
import userData from "./userData";
import isAuthenticated from "./isAuthenticated";
import usersCourses from "./courses";
import setLevel from "./setLevel";

export default combineReducers({
  userRegister,
  userLogin,
  userData,
  isAuthenticated,
  usersCourses,
  setLevel,
});
