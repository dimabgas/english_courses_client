import { all } from "redux-saga/effects";

import userSagas from "./user";
import coursesSagas from "./courses";
import lessonsSagas from "./lessons";

export default function* () {
  yield all([userSagas(), coursesSagas(), lessonsSagas()]);
}
