import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const FILTER_USERS_COURSES = "@/FILTER_USERS_COURSES";
export const filterUsersCourses = createAction(FILTER_USERS_COURSES);
