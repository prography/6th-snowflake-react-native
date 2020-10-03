import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import { REQUEST_LOGIN, setIsLoggedin } from "~/store/modules/join/auth";
import { BASE_URL } from "~/utils/constant";
import { useAsyncStorage } from "@react-native-community/async-storage";
import { AsyncAccessToken } from "~/utils/asyncStorage";
import { llog3, llog2, llog1 } from "~/utils/functions";

function* loginAPI(email: string, password: string) {
  llog3("😸9. loginAPI called", email, password);
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

  llog3("😸9-1. loginAPI response json", response, json);

  if (response.status !== 200) {
    llog2("response error", response.status);
    return null;
  }
  return json.access;
}

function* login(email: string, password: string) {
  try {
    llog1("버튼 누르면 또 찍히나?");
    llog3("😸8. login called", email, password);

    // 1. loginAPI 호출
    const accessToken = yield call(() => loginAPI(email, password));
    console.log("😸10. loginAPI 에서 accesToken 받아오기", accessToken);

    if (accessToken === null) {
      alert("정보가 올바르지 않습니다. 다시 입력해주세요.");
      // loginAPI(email, password)
      return;
    }

    if (accessToken === null) {
      alert("정보가 올바르지 않습니다. 다시 입력해주세요.");
      return;
    }

    // 2. accessToken을 AsyncStorage에 저장
    const { setItem } = useAsyncStorage(AsyncAccessToken);
    yield setItem(accessToken);

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
