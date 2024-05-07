import { handleActions } from "redux-actions";
import { CREATE_LESSON } from "@/actions/lesson/create";

const initialState = {
  isAdded: false,
  loading: false,
  errors: [],
};

const reducer = handleActions(
  {
    [CREATE_LESSON.REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [CREATE_LESSON.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isAdded: true,
    }),
    [CREATE_LESSON.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
