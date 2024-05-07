import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const USER_LOGIN = makeActions("@/USER_LOGIN");

export const loginUser = createAction(USER_LOGIN.REQUEST);
export const loginUserSuccess = createAction(USER_LOGIN.SUCCESS);
export const loginUserError = createAction(USER_LOGIN.ERROR);
