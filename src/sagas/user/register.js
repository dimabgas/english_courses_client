import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { USER_REGISTER } from "@/actions/user/register";
import {
  registerUserSuccess,
  registerUserError,
} from "@/actions/user/register";

import { SIGN_UP_URL } from "@/constants/apiUrls";
import { SIGN_IN_URL } from "@/constants/routes";
import { toastOptions } from "@/constants/toastOptions";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(USER_REGISTER.REQUEST, registerUser);
}

function* registerUser({ payload }) {
  try {
    const response = yield call(useFetch.post, SIGN_UP_URL, payload);

    if (!response.error) {
      yield put(registerUserSuccess());
      toast.success(
        `🦄 An account has been created and you can log in.`,
        toastOptions
      );
      yield put(push(SIGN_IN_URL));
    } else {
      yield put(registerUserError(response.error));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}
