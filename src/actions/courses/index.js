import { createAction } from "redux-actions";
import makeActions from "@/helpers/actions/makeActions";

export const COURSES = makeActions("@/COURSES");
export const getCourses = createAction(COURSES.REQUEST);
export const getCoursesSuccess = createAction(COURSES.SUCCESS);
export const getCoursesError = createAction(COURSES.ERROR);

export const ADD_COURSE = makeActions("@/ADD_COURSE");
export const addCourse = createAction(ADD_COURSE.REQUEST);
export const addCourseSuccess = createAction(ADD_COURSE.SUCCESS);
export const addCourseError = createAction(ADD_COURSE.ERROR);

export const SET_LEVEL = makeActions("@/SET_LEVEL");
export const setLevel = createAction(SET_LEVEL.REQUEST);
export const setLevelSuccess = createAction(SET_LEVEL.SUCCESS);
export const sestLevelError = createAction(SET_LEVEL.ERROR);

export const DELETE_COURSE = makeActions("@/DELETE_COURSE");
export const deleteCourse = createAction(DELETE_COURSE.REQUEST);
export const deleteCourseSuccess = createAction(DELETE_COURSE.SUCCESS);
export const deleteCourseError = createAction(DELETE_COURSE.ERROR);

export const EDIT_COURSE = makeActions("@/EDIT_COURSE"); // edit course here
export const editCourse = createAction(EDIT_COURSE.REQUEST);
export const editCourseSuccess = createAction(EDIT_COURSE.SUCCESS);
export const editCourseError = createAction(EDIT_COURSE.ERROR);

export const CHANGE_PAGE = makeActions("@/CHANGE_PAGE");
export const changePage = createAction(CHANGE_PAGE.REQUEST);

export const COURSE = makeActions("@/COURSE");
export const getCourse = createAction(COURSE.REQUEST);
export const getCourseSuccess = createAction(COURSE.SUCCESS);
export const getCourseError = createAction(COURSE.ERROR);

export const SET_INITIAL_COURSE = "SET_INITIAL_COURSE";
export const setInitialCourse = createAction(SET_INITIAL_COURSE);
