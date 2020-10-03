import { all, fork, call, put, take } from "redux-saga/effects";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-community/async-storage";

import { LOGIN, setIsLoggedin, loginAC } from "~/store/modules/join/auth";
import { llog3 } from "~/utils/functions";
import * as authAPI from "~/api/join/auth";
import { LoginRes } from "~/api/interface";
import { AsyncAccessToken } from "~/utils/asyncStorage";

// TODO 이걸로 다 바꾸기
function* manageLoginLogout(value: boolean, jwt?: string) {
  // 이걸로 로그인도 하고 로그아웃도 할거야
  yield put(setIsLoggedin(value));
  if (value === true && jwt) {
    AsyncStorage.setItem(AsyncAccessToken, jwt);
  }
  if (value === false) {
    AsyncStorage.removeItem(AsyncAccessToken);
  }
}

function* login(email: string, password: string) {
  try {
    llog3("😸8. login called", email, password);

    // 1. loginAPI 호출
    const json: LoginRes = yield call(authAPI.login, email, password);
    console.log("😸10. loginAPI 에서 accesToken 받아오기", json.access);

    // 2. login 성공 처리
    yield put(loginAC.success(json));

    // 3. accessToken을 AsyncStorage에 저장, isLoggedin 설정
    yield call(manageLoginLogout, true, json.access);
  } catch (e) {
    yield put(loginAC.error(e));
  }
}

function* watchAuth() {
  console.log("😸7. LOGIN_REQUEST가 드디어 saga에서 감지되었다!!");
  // yield takeLatest(LOGIN.REQUEST, login); // 액션에서 뭔가 가져올게 없으면 이런식으로
  const { email, password } = yield take(LOGIN.REQUEST);
  yield call(login, email, password);
}

export default function* authSaga() {
  yield all([fork(watchAuth)]);
}
