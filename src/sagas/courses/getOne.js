import { takeLatest, put, call } from "redux-saga/effects";
import { COURSE, getCourseError, getCourseSuccess } from "@/actions/courses";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(COURSE.REQUEST, getCourse);
}

function* getCourse({ payload }) {
  try {
    const response = yield call(useFetch.get, `/api/course/${payload}`);

    if (!response.error) {
      yield put(getCourseSuccess(response));
    } else {
      yield put(getCourseError(response.error));
    }
  } catch (error) {
    yield put(getCourseError(error));
  }
}
