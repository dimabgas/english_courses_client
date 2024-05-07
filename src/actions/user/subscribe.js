import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const USER_SUBSCRIBE = makeActions("@/USER_SUBSCRIBE");

export const subscribeUser = createAction(USER_SUBSCRIBE.REQUEST);
export const subscribeUserSuccess = createAction(USER_SUBSCRIBE.SUCCESS);
export const subscribeUserError = createAction(USER_SUBSCRIBE.ERROR);
