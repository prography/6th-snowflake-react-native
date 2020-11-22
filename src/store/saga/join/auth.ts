import { all, fork, call, put, take, takeEvery } from "redux-saga/effects";
import AsyncStorage from "@react-native-community/async-storage";

import {
  LOGIN,
  setIsLoggedin,
  loginAC,
  refreshTokenAC,
  REFRESH_TOKEN,
} from "~/store/modules/join/auth";
import { llog } from "~/utils/functions";
import { LoginRes, RequestType } from "~/api/interface";
import asyncUtil, { AsyncAccessToken } from "~/utils/asyncStorage";
import authAPI from "~/api/join/auth";
import { toast } from "~/utils/toast";

// TODO 이걸로 다 바꾸기
function* manageLoginLogout(value: boolean, loginRes?: LoginRes) {
  // 이걸로 로그인도 하고 로그아웃도 할거야
  yield put(setIsLoggedin(value));
  if (value === true && loginRes) {
    yield AsyncStorage.setItem(AsyncAccessToken, loginRes.access);
    if (loginRes.refresh) {
      // TODO: 201121 api/token/refresh 응답에 refresh가 안옴. 와야하는거 아닌가? 물어봤음.
      yield AsyncStorage.setItem(asyncUtil.refreshToken, loginRes.refresh);
    }
  }
  if (value === false) {
    yield AsyncStorage.removeItem(AsyncAccessToken);
  }
}

function* login(email: string, password: string) {
  try {
    llog("😸8. login called", email, password);

    // 1. loginAPI 호출
    const json: LoginRes = yield call(authAPI.login, email, password);
    llog("😸10. loginAPI 에서 accesToken 받아오기", json);

    // 2. login 성공 처리
    yield put(loginAC.success(json));

    // 3. accessToken을 AsyncStorage에 저장, isLoggedin 설정
    yield call(manageLoginLogout, true, json);
  } catch (e) {
    yield put(loginAC.error(e));
  }
}
function* watchAuth() {
  llog("😸7. LOGIN_REQUEST가 드디어 saga에서 감지되었다!!");
  // yield takeLatest(LOGIN.REQUEST, login); // 액션에서 뭔가 가져올게 없으면 이런식으로
  while (true) {
    const { email, password } = yield take(LOGIN.REQUEST);
    yield call(login, email, password);
  }
}

function* refreshToken(refetch: () => void) {
  try {
    const json: LoginRes = yield call(authAPI.refreshToken);
    llog("🟣 refresh token success", json);
    yield put(refreshTokenAC.success(json));
    // 새로 받은 토큰을 저장하고
    yield call(manageLoginLogout, true, json);
    // 다시 요청해야하는 api를 호출한다.
    yield refetch();
  } catch (e) {
    toast(e.message); // 세션이 만료되었어요. 로그인을 다시 진행해주세요. // TODO 로그인 화면으로 옮겨야 함
    yield put(refreshTokenAC.error(e));
    yield call(manageLoginLogout, false);
  }
}
function* watchRefresh() {
  while (true) {
    const { refetch }: RequestType = yield take(REFRESH_TOKEN.REQUEST);
    yield call(refreshToken, refetch);
  }
}

export default function* authSaga() {
  yield all([fork(watchAuth), fork(watchRefresh)]);
}
