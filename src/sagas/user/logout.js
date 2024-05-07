import { takeLatest, put, call } from "redux-saga/effects";

import { USER_LOGOUT, logoutUserSuccess } from "@/actions/user/logout";

import { LOGOUT } from "@/constants/apiUrls";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(USER_LOGOUT.REQUEST, logoutUser);
}

function* logoutUser() {
  try {
    yield call(useFetch.delete, LOGOUT);
  } catch (error) {
    yield put(logoutUserSuccess());
  }
}
