import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { toastOptions } from "@/constants/toastOptions";

import { SET_LEVEL, setLevelSuccess, setLevelError } from "@/actions/courses";
import { getUsersCourses } from "@/actions/user/courses";
import { COURSE_URL } from "@/constants/apiUrls";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(SET_LEVEL.REQUEST, setLevel);
}

function* setLevel({ payload }) {
  const { formData } = payload;

  try {
    yield call(formData);
  } catch (error) {}
}
