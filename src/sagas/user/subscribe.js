import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { USER_SUBSCRIBE } from "@/actions/user/subscribe";
import {
  subscribeUserSuccess,
  subscribeUserError,
} from "@/actions/user/subscribe";

import { SUBSCRIBE_USER_URL } from "@/constants/apiUrls";
import { LINK_TO_COURSE } from "@/constants/routes";
import { toastOptions } from "@/constants/toastOptions";

import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest(USER_SUBSCRIBE.REQUEST, subscribeUser);
}

function* subscribeUser({ payload }) {
  try {
    const response = yield call(
      useFetch.put,
      `${SUBSCRIBE_USER_URL}/${payload}`
    );

    if (!response.error) {
      yield put(subscribeUserSuccess());
      toast.success(
        `🦄 You have successfully signed up for the course.`,
        toastOptions
      );
      yield put(push(`${LINK_TO_COURSE}/${payload}`));
    } else {
      yield put(subscribeUserError(response.error));
    }
  } catch (error) {
    yield put(subscribeUserError(error));
  }
}
