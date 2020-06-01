import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import { REQUEST_LOGIN, setIsLoggedin } from "~/modules/auth";
import { BASE_URL } from "~/utils/constant";
import { useAsyncStorage } from "@react-native-community/async-storage";
import { AsyncAccessToken } from "~/utils/asyncStorage";

function* loginAPI(email: string, password: string) {
  console.log("😸9. loginAPI called", email, password);
  const response = yield fetch(`${BASE_URL}/api/token/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const json = yield response.json();
  return json.access;
}

function* login(email: string, password: string) {
  try {
    console.log("😸8. login called", email, password);

    // 1. loginAPI 호출
    const accessToken = yield call(() => loginAPI(email, password));
    console.log("😸10. loginAPI 에서 accesToken 받아오기", accessToken);

    // 2. accessToken을 AsyncStorage에 저장
    const { setItem, getItem } = useAsyncStorage(AsyncAccessToken);
    yield setItem(accessToken);
    const accessTokenFS = yield getItem(); // FS: From asyncStorage
    console.log("😸11. AsyncStorage에 잘 저장됐나 확인", accessTokenFS);

    // 3. isLoggedin 설정
    yield put(setIsLoggedin(true));
  } catch (e) {
    console.error("💢login error", e);
  }
}

function* watchAuth() {
  // yield takeLatest(REQUEST_LOGIN, login); // 액션에서 뭔가 가져올게 없으면 이런식으로
  console.log("😸7. REQUEST_LOGIN가 드디어 saga에서 감지되었다!!");
  const { email, password } = yield take(REQUEST_LOGIN);
  yield call(login, email, password);
}

export default function* authSaga() {
  yield all([fork(watchAuth)]);
}
