import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  CREATE_LESSON,
  createLessonSuccess,
  createLessonError,
} from "@/actions/lesson/create";
import { COURSE_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([CREATE_LESSON.REQUEST], createLesson);
}

function* createLesson({ payload }) {
  try {
    const { courseId, lessonFields } = payload;

    const response = yield call(
      useFetch.post,
      `${COURSE_URL}/${courseId}/lesson`,
      lessonFields
    );

    if (!response.error) {
      yield put(createLessonSuccess(response));
      toast.success(`🦄 The course was added successfully.`);
    } else {
      yield put(createLessonError(response.error));
    }
  } catch (error) {
    yield put(createLessonError(error));
  }
}
