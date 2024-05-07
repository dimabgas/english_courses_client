import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import { USER_LOGIN } from "@/actions/user/login";
import { loginUserSuccess, loginUserError } from "@/actions/user/login";

import { SIGN_IN_URL } from "@/constants/apiUrls";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(USER_LOGIN.REQUEST, loginUser);
}

function* loginUser({ payload }) {
  const { formData, from } = payload;

  try {
    const response = yield call(useFetch.post, SIGN_IN_URL, formData);

    if (!response.error) {
      yield put(loginUserSuccess(response));
      yield put(push(from));
    } else {
      yield put(loginUserError(response.error));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}
