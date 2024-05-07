import { all } from "redux-saga/effects";

import getCourses from "./getAll";
import getCourse from "./getOne";
import addCourses from "./add";
import deleteCourse from "./delete";
import editCourse from "./edit";

export default function* root() {
  yield all([
    getCourses(),
    addCourses(),
    getCourse(),
    deleteCourse(),
    editCourse(),
  ]);
}
