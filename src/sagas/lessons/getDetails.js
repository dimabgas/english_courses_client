import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_LESSON_DETAILS,
  getLessonDetailsError,
  getLessonDetailsSuccess,
} from "@/actions/lesson/getDetails";
import { LESSON_DETAIL_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([GET_LESSON_DETAILS.REQUEST], getLessonDetails);
}

function* getLessonDetails({ payload }) {
  try {
    const response = yield call(
      useFetch.get,
      `${LESSON_DETAIL_URL}/${payload}`
    );

    if (!response.error) {
      yield put(getLessonDetailsSuccess(response));
    } else {
      yield put(getLessonDetailsError(response.error));
    }
  } catch (error) {
    yield put(getLessonDetailsError(error));
  }
}
