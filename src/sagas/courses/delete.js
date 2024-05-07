import { takeLatest, put, call } from "redux-saga/effects";
import { DELETE_COURSE, deleteCourseError } from "@/actions/courses";
import { COURSE_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([DELETE_COURSE.REQUEST], deleteCourse);
}

function* deleteCourse({ payload }) {
  try {
    const response = yield call(
      useFetch.delete,
      `${COURSE_URL}/delete/${payload}`
    );
  } catch (error) {
    yield put(deleteCourseError(error));
  }
}
