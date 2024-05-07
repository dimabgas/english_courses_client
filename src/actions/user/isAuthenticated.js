import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const USER_AUTH = makeActions("@/USER_AUTH");

export const userAuthenticated = createAction(USER_AUTH.REQUEST);
export const userAuthenticatedSuccess = createAction(USER_AUTH.SUCCESS);
export const userAuthenticatedError = createAction(USER_AUTH.ERROR);
