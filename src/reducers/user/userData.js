import { handleActions } from "redux-actions";

import { USER_LOGIN } from "@/actions/user/login";
import { GET_USER_DATA } from "@/actions/user/getData";
import { SET_INITIAL } from "@/actions";

const initialState = {
  data: {},
};

const reducer = handleActions(
  {
    [USER_LOGIN.SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [GET_USER_DATA.SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [SET_INITIAL]: (state) => ({
      ...state,
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
