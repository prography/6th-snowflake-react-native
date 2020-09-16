import { takeEvery, call, put } from "redux-saga/effects";

import * as userInfoAPI from "~/api/join/userInfo";
import {
  GET_USER_INFO_REQUEST,
  getUserInfoSuccess,
  getUserInfoError,
} from "~/store/modules/join/userInfo";

function* getUserInfoSaga() {
  try {
    const userInfo = yield call(userInfoAPI.getUserInfo);
    yield put(getUserInfoSuccess(userInfo));
  } catch (error) {
    yield put(getUserInfoError(error));
  }
}

// 사가들을 합치기
export function* userInfoSaga() {
  yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoSaga);
}
