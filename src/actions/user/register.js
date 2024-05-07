import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const USER_REGISTER = makeActions("@/USER_REGISTER");

export const registerUser = createAction(USER_REGISTER.REQUEST);
export const registerUserSuccess = createAction(USER_REGISTER.SUCCESS);
export const registerUserError = createAction(USER_REGISTER.ERROR);
