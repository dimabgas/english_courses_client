import { takeLatest, put, call } from "redux-saga/effects";
import {
  userAuthenticatedSuccess,
  userAuthenticatedError,
} from "@/actions/user/isAuthenticated";
import { setInitial } from "@/actions";
import { CHECK_AUTH } from "@/constants/apiUrls";
import { LOCATION_CHANGE } from "connected-react-router";

export default function* () {
  yield takeLatest([LOCATION_CHANGE], userIsAuthenticated);
}

function* userIsAuthenticated() {
  try {
    const response = yield call(fetch, CHECK_AUTH, { method: "get" });

    if (response.ok) {
      yield put(userAuthenticatedSuccess());
    } else {
      yield put(setInitial());
      yield put(userAuthenticatedError());
    }
  } catch (error) {
    yield put(setInitial());
    yield put(userAuthenticatedError());
  }
}
