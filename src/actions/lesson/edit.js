import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const EDIT_LESSON = makeActions("@/EDIT_LESSON");
export const editLesson = createAction(EDIT_LESSON.REQUEST);
export const editLessonSuccess = createAction(EDIT_LESSON.SUCCESS);
export const editLessonError = createAction(EDIT_LESSON.ERROR);
