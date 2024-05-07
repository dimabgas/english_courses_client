import { handleActions } from "redux-actions";

import { USER_AUTH } from "@/actions/user/isAuthenticated";
import { USER_LOGIN } from "@/actions/user/login";
import { USER_LOGOUT } from "@/actions/user/logout";

const initialState = {
  isAuthenticated: false,
};

const reducer = handleActions(
  {
    [USER_AUTH.SUCCESS]: (state) => ({
      ...state,
      isAuthenticated: true,
    }),
    [USER_AUTH.ERROR]: (state) => ({
      ...state,
      isAuthenticated: false,
    }),
    [USER_LOGIN.SUCCESS]: (state) => ({
      ...state,
      isAuthenticated: true,
    }),
    [USER_LOGOUT.SUCCESS]: (state) => ({
      ...state,
      isAuthenticated: false,
    }),
  },
  initialState
);

export default reducer;
