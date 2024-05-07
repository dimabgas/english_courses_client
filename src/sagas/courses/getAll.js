import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  COURSES,
  getCoursesSuccess,
  getCoursesError,
  CHANGE_PAGE,
} from "@/actions/courses";
import { courses } from "@/selectors";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([COURSES.REQUEST, CHANGE_PAGE.REQUEST], getCourses);
}

function* getCourses() {
  try {
    const coursesState = yield select(courses);
    const { page, size } = coursesState.courses;

    const response = yield call(
      useFetch.get,
      `/api/courses?page=${page}&size=${size}`
    );

    if (!response.error) {
      yield put(getCoursesSuccess(response));
    } else {
      yield put(getCoursesError(response.error));
    }
  } catch (error) {
    yield put(getCoursesError(error));
  }
}
