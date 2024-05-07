import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const GET_USERS_COURSES = makeActions("@/GET_USER_COURSES");

export const getUsersCourses = createAction(GET_USERS_COURSES.REQUEST);
export const getUsersCoursesSuccess = createAction(GET_USERS_COURSES.SUCCESS);
export const getUsersCoursesError = createAction(GET_USERS_COURSES.ERROR);
