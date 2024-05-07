import { takeLatest, put, call } from "redux-saga/effects";

import {
  GET_USERS_COURSES,
  getUsersCoursesSuccess,
  getUsersCoursesError,
} from "@/actions/user/courses";
import { CREATE_LESSON } from "@/actions/lesson/create";
import { DELETE_LESSON } from "@/actions/lesson/delete";
import { USERS_COURSES_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(
    [GET_USERS_COURSES.REQUEST, CREATE_LESSON.SUCCESS, DELETE_LESSON.SUCCESS],
    getUserCourses
  );
}

function* getUserCourses() {
  try {
    const response = yield call(useFetch.get, USERS_COURSES_URL);

    if (!response.error) {
      yield put(getUsersCoursesSuccess(response));
    } else {
      yield put(getUsersCoursesError(response.error));
    }
  } catch (error) {
    yield put(getUsersCoursesError(error));
  }
}
