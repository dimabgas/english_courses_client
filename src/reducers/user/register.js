import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "connected-react-router";

import { USER_REGISTER } from "@/actions/user/register";

const initialState = {
  errors: [],
  loading: false,
};

const reducer = handleActions(
  {
    [USER_REGISTER.REQUEST]: () => ({
      ...initialState,
      loading: true,
    }),
    [USER_REGISTER.SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
    }),
    [USER_REGISTER.ERROR]: (state, { payload }) => ({
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
