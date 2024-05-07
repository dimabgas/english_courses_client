import { takeLatest, put, call } from "redux-saga/effects";
import { EDIT_USER, editUserError, editUserSuccess } from "@/actions/user/edit";
import { GET_USER_DATA_URL } from "@/constants/apiUrls";
import useFetch from "@/helpers/fetch";

export default function* () {
  yield takeLatest([EDIT_USER.REQUEST], editUser);
}

function* editUser({ payload }) {
  try {
    const { userId, userFields } = payload;

    const response = yield call(
      useFetch.put,
      `${GET_USER_DATA_URL}/${userId}`,
      userFields
    );

    if (!response.error) {
      yield put(editUserSuccess());
    } else {
      yield put(editUserError(response.error));
    }
  } catch (error) {
    yield put(editUserError(error));
  }
}
