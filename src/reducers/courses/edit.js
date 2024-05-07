import { handleActions } from "redux-actions";
import { EDIT_COURSE } from "@/actions/courses";

const initialState = {
  loading: false,
  isLessonEdited: false,
  errors: [],
};

const reducer = handleActions(
  {
    [EDIT_COURSE.REQUEST]: (state) => ({
      ...state,
      loading: true,
      isLessonEdited: false,
    }),
    [EDIT_COURSE.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isLessonEdited: true,
    }),
    [EDIT_COURSE.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
