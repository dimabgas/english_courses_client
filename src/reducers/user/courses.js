import { handleActions } from "redux-actions";

import { GET_USERS_COURSES } from "@/actions/user/courses";
import { SET_INITIAL } from "@/actions";

const initialState = {
  data: [],
  errors: [],
  isLoaded: false,
  loading: false,
};

const reducer = handleActions(
  {
    [GET_USERS_COURSES.REQUEST]: () => ({
      ...initialState,
      loading: true,
    }),
    [GET_USERS_COURSES.SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false,
      isLoaded: true,
    }),
    [GET_USERS_COURSES.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
    [SET_INITIAL]: (state) => ({
      ...state,
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
