import { handleActions } from "redux-actions";
import { FILTER_USERS_COURSES } from "@/actions/user/filter";
import { SET_INITIAL } from "@/actions";
import { levelsOptions } from "@/forms/SetLevelForm/component";

const initialState = {
  filter: {
    levels: levelsOptions.map(({ value }) => value) || [],
  },
};

const reducer = handleActions(
  {
    [FILTER_USERS_COURSES]: (state, { payload }) => ({
      ...state,
      filter: {
        ...state.filter,
        ...payload,
      },
    }),
    [SET_INITIAL]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default reducer;
