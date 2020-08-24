import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import blindReducer from "~/modules/product/blindReducer";
import genderColorReducer from "~/modules/join/genderColorReducer";
import reviewUploadReducer from "~/modules/product/reviewUpload/reviewUploadReducer";
import userInfoReducer from "~/modules/join/userInfoReducer";
import authReducer from "~/modules/auth"; // index까지 안들어가도 index부터 자동으로 훑어서 /index 안써줘도 됨
import counter, { counterSaga } from "./test/counter";

const rootReducer = combineReducers({
  blindReducer,
  genderColorReducer,
  reviewUploadReducer,
  userInfoReducer,
  authReducer,
  counter,
});

export function* rootSaga() {
  yield all([counterSaga()]); //all은 배열 안의 여러 사가를 동시에 실행시켜줌
}

export default rootReducer;
