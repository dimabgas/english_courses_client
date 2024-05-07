import { handleActions } from "redux-actions";
import { DELETE_COURSE } from "@/actions/courses";

const initialState = {
  loading: false,
  isCourseDeleted: false,
  errors: [],
};

const reducer = handleActions(
  {
    [DELETE_COURSE.REQUEST]: (state) => ({
      ...state,
      loading: true,
      isCourseDeleted: false,
      errors: [],
    }),
    [DELETE_COURSE.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isCourseDeleted: true,
    }),

    [DELETE_COURSE.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
