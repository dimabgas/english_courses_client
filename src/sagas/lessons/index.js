import { all } from "redux-saga/effects";

import getLessonsList from "./getList";
import getLessonDetails from "./getDetails";
import createLesson from "./create";
import editLesson from "./edit";
import deleteLesson from "./delete";

export default function* root() {
  yield all([
    getLessonsList(),
    getLessonDetails(),
    createLesson(),
    editLesson(),
    deleteLesson(),
  ]);
}
