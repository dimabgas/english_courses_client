import { handleActions } from "redux-actions";
import { DELETE_LESSON } from "@/actions/lesson/delete";

const initialState = {
  loading: false,
  isLessonDeleted: false,
  errors: [],
};

const reducer = handleActions(
  {
    [DELETE_LESSON.REQUEST]: (state) => ({
      ...state,
      loading: true,
      isLessonDeleted: false,
    }),
    [DELETE_LESSON.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isLessonDeleted: true,
    }),
    [DELETE_LESSON.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
