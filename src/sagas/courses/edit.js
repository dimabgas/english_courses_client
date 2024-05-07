import { takeLatest, put, call } from "redux-saga/effects";
import {
  EDIT_COURSE,
  editCourseError,
  editCourseSuccess,
} from "@/actions/courses/index";
import { COURSE_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([EDIT_COURSE.REQUEST], editCourse);
}

function* editCourse({ payload }) {
  try {
    const { CourseId, CourseFields } = payload;

    const response = yield call(
      useFetch.put,
      `${COURSE_URL}/${CourseId}`,
      CourseFields
    );

    if (!response.error) {
      yield put(editCourseSuccess());
    } else {
      yield put(editCourseError(response.error));
    }
  } catch (error) {
    yield put(editCourseError(error));
  }
}
