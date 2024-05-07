import { handleActions } from "redux-actions";
import { COURSE, SET_INITIAL_COURSE } from "@/actions/courses";

const initialState = {
  data: [],
  loading: false,
  errors: [],
};

const reducer = handleActions(
  {
    [COURSE.REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [COURSE.SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      data: payload,
    }),

    [COURSE.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
    [SET_INITIAL_COURSE]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
