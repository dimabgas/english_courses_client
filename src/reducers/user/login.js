import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "connected-react-router";

import { USER_LOGIN } from "@/actions/user/login";

const initialState = {
  errors: [],
  loading: false,
};

const reducer = handleActions(
  {
    [USER_LOGIN.REQUEST]: () => ({
      ...initialState,
      loading: true,
    }),
    [USER_LOGIN.SUCCESS]: (state) => ({
      ...state,
      loading: false,
    }),
    [USER_LOGIN.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
    [LOCATION_CHANGE]: (state) => ({
      ...state,
      errors: [],
    }),
  },
  initialState
);

export default reducer;
