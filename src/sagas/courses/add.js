import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { toastOptions } from "@/constants/toastOptions";

import {
  ADD_COURSE,
  addCourseSuccess,
  addCourseError,
} from "@/actions/courses";
import { getUsersCourses } from "@/actions/user/courses";
import { COURSE_URL } from "@/constants/apiUrls";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([ADD_COURSE.REQUEST], addCourse);
}

function* addCourse({ payload }) {
  try {
    const response = yield call(useFetch.post, COURSE_URL, payload);

    if (!response.error) {
      yield put(getUsersCourses());
      yield put(addCourseSuccess(response));
      toast.success(`🦄 The course was added successfully.`, toastOptions);
    }
  } catch (error) {
    yield put(addCourseError(error));
  }
}
