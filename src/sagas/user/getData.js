import { takeLatest, put, call } from "redux-saga/effects";
import { GET_USER_DATA, getUserDataSuccess } from "@/actions//user/getData";
import { setInitial } from "@/actions";
import { GET_USER_DATA_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([GET_USER_DATA.REQUEST], getUserData);
}

function* getUserData() {
  try {
    const response = yield call(useFetch.get, GET_USER_DATA_URL);

    if (!response.error) {
      yield put(getUserDataSuccess(response));
    } else {
      yield put(setInitial());
    }
  } catch (error) {
    yield put(setInitial());
  }
}
