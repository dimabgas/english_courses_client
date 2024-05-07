import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const GET_LESSON_DETAILS = makeActions("@/GET_LESSON_DETAILS");
export const getLessonDetails = createAction(GET_LESSON_DETAILS.REQUEST);
export const getLessonDetailsSuccess = createAction(GET_LESSON_DETAILS.SUCCESS);
export const getLessonDetailsError = createAction(GET_LESSON_DETAILS.ERROR);
