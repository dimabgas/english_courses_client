import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const GET_USER_DATA = makeActions("@/GET_USER_DATA");

export const getUser = createAction(GET_USER_DATA.REQUEST);
export const getUserDataSuccess = createAction(GET_USER_DATA.SUCCESS);
export const getUserDataError = createAction(GET_USER_DATA.ERROR);
