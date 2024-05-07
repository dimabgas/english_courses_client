import { combineReducers } from "redux";
import lessonDetails from "./getDetails";
import createLesson from "./create";
import editLesson from "./edit";
import deleteLesson from "./delete";

export default combineReducers({
  lessonDetails,
  createLesson,
  editLesson,
  deleteLesson,
});
