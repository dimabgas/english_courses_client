import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const GET_LESSONS_LIST = makeActions("@/GET_LESSONS_LIST");
export const getLessonsList = createAction(GET_LESSONS_LIST.REQUEST);
export const getLessonsListSuccess = createAction(GET_LESSONS_LIST.SUCCESS);
export const getLessonsListError = createAction(GET_LESSONS_LIST.ERROR);
