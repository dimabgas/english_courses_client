import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_LESSONS_LIST,
  getLessonsListSuccess,
  getLessonsListError,
} from "@/actions/lesson/getList";
import { COURSE_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([GET_LESSONS_LIST.REQUEST], getLessonsList);
}

function* getLessonsList({ payload }) {
  try {
    const response = yield call(
      useFetch.get,
      `${COURSE_URL}/${payload}/lessons`
    );

    if (!response.error) {
      yield put(getLessonsListSuccess(response));
    } else {
      yield put(getLessonsListError(response.error));
    }
  } catch (error) {
    yield put(getLessonsListError(error));
  }
}
