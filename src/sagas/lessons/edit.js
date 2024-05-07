import { takeLatest, put, call } from "redux-saga/effects";
import {
  EDIT_LESSON,
  editLessonError,
  editLessonSuccess,
} from "@/actions/lesson/edit";
import { LESSON_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([EDIT_LESSON.REQUEST], editLesson);
}

function* editLesson({ payload }) {
  try {
    const { lessonId, lessonFields } = payload;

    const response = yield call(
      useFetch.put,
      `${LESSON_URL}/${lessonId}`,
      lessonFields
    );

    if (!response.error) {
      yield put(editLessonSuccess());
    } else {
      yield put(editLessonError(response.error));
    }
  } catch (error) {
    yield put(editLessonError(error));
  }
}
