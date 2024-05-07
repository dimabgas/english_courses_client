import { handleActions } from "redux-actions";
import { EDIT_LESSON } from "@/actions/lesson/edit";

const initialState = {
  loading: false,
  isLessonEdited: false,
  errors: [],
};

const reducer = handleActions(
  {
    [EDIT_LESSON.REQUEST]: (state) => ({
      ...state,
      loading: true,
      isLessonEdited: false,
    }),
    [EDIT_LESSON.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isLessonEdited: true,
    }),
    [EDIT_LESSON.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
