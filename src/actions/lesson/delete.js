import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const DELETE_LESSON = makeActions("@/DELETE_LESSON");
export const deleteLesson = createAction(DELETE_LESSON.REQUEST);
export const deleteLessonSuccess = createAction(DELETE_LESSON.SUCCESS);
export const deleteLessonError = createAction(DELETE_LESSON.ERROR);
