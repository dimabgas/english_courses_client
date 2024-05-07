import { combineReducers } from "redux";

import courses from "./getCourses";
import addCourse from "./addCourse";
import course from "./course";
import deleteCourse from "./deleteCourse";
import editCourse from "./edit";
export default combineReducers({
  courses,
  addCourse,
  course,
  deleteCourse,
  editCourse,
});
