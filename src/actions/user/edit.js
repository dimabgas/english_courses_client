import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const EDIT_USER = makeActions("@/EDIT_USER");

export const editUser = createAction(EDIT_USER.REQUEST);
export const editUserSuccess = createAction(EDIT_USER.SUCCESS);
export const editUserError = createAction(EDIT_USER.ERROR);
