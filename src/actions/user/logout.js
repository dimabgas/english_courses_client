import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const USER_LOGOUT = makeActions("@/USER_LOGOUT");

export const logoutUser = createAction(USER_LOGOUT.REQUEST);
export const logoutUserSuccess = createAction(USER_LOGOUT.SUCCESS);
