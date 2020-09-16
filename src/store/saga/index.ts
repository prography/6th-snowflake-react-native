import { all } from "redux-saga/effects";

import authSaga from "./auth";
import counterSaga from "./counter-test";
import { userInfoSaga } from "./join/userInfo";

export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), userInfoSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
