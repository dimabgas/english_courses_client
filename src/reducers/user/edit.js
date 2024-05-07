import { handleActions } from "redux-actions";
import { EDIT_USER } from "@/actions/user/edit";

const initialState = {
  loading: false,
  isUserEdited: false,
  errors: [],
};

const reducer = handleActions(
  {
    [EDIT_USER.REQUEST]: (state) => ({
      ...state,
      loading: true,
      isCourseDeleted: false,
      errors: [],
    }),
    [EDIT_USER.SUCCESS]: (state) => ({
      ...state,
      loading: false,
      isCourseDeleted: true,
    }),

    [EDIT_USER.ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      errors: [payload],
    }),
  },
  initialState
);

export default reducer;
