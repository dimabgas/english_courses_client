import { handleActions } from "redux-actions";
import { ADD_COURSE } from "@/actions/courses";

const initialState = {
  loading: false,
  errors: [],
};

const reducer = handleActions(
  {
    [ADD_COURSE.REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [ADD_COURSE.SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [],
    }),

    [ADD_COURSE.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
