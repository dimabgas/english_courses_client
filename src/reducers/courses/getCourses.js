import { handleActions } from "redux-actions";
import { COURSES, CHANGE_PAGE } from "@/actions/courses";
import { SET_INITIAL } from "@/actions";

const initialState = {
  data: [],
  page: 1,
  size: 15,
  loading: false,
  loaded: false,
  errors: [],
};

const reducer = handleActions(
  {
    [COURSES.REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [COURSES.SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: true,
      data: payload,
    }),

    [COURSES.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
    [CHANGE_PAGE.REQUEST]: (state, { payload }) => ({
      ...state,
      loading: true,
      page: payload,
    }),
    [SET_INITIAL]: (state) => ({
      ...state,
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
