import { takeLatest, put, call } from "redux-saga/effects";
import {
  DELETE_LESSON,
  deleteLessonError,
  deleteLessonSuccess,
} from "@/actions/lesson/delete";
import { LESSON_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([DELETE_LESSON.REQUEST], deleteLesson);
}

function* deleteLesson({ payload }) {
  try {
    const response = yield call(useFetch.delete, `${LESSON_URL}/${payload}`);

    if (!response.error) {
      yield put(deleteLessonSuccess());
    } else {
      yield put(deleteLessonError(response.error));
    }
  } catch (error) {
    yield put(deleteLessonError(error));
  }
}
