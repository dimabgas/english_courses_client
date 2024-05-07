import { handleActions } from "redux-actions";
import { GET_LESSON_DETAILS } from "@/actions/lesson/getDetails";
import { SET_LESSON_INIT } from "@/actions/lesson/setInit";

const initialState = {
  data: [],
  loading: false,
  errors: [],
};

const reducer = handleActions(
  {
    [GET_LESSON_DETAILS.REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_LESSON_DETAILS.SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      data: payload,
    }),
    [GET_LESSON_DETAILS.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
    [SET_LESSON_INIT]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
