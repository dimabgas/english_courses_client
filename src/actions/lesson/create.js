import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const CREATE_LESSON = makeActions("@/CREATE_LESSON");
export const createLesson = createAction(CREATE_LESSON.REQUEST);
export const createLessonSuccess = createAction(CREATE_LESSON.SUCCESS);
export const createLessonError = createAction(CREATE_LESSON.ERROR);
