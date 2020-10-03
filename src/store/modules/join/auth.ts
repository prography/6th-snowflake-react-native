import AsyncStorage from "@react-native-community/async-storage";

import { AsyncAccessToken } from "~/utils/asyncStorage";
import { llog2, llog1 } from "~/utils/functions";

export type AuthState = {
  isLoggedin: boolean;
};

const initialState: AuthState = {
  isLoggedin: null,
};

// deprecated
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const SET_IS_LOGGEDIN = "SET_IS_LOGGEDIN";
// new
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const requestLogin = (email: string, password: string) => {
  llog1("😸6. requestLogin 액션 dispatch");
  return {
    type: REQUEST_LOGIN,
    email,
    password,
  };
};
export const setIsLoggedin = (isLoggedin: boolean) => {
  llog2("😸12. isLoggedin에 저장!", isLoggedin);
  return {
    type: SET_IS_LOGGEDIN,
    isLoggedin,
  };
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return { ...state, isLoggedin: action.isLoggedin };
    default:
      return state;
  }
};

export const manageLoginLogout = (dispatch, value: boolean, jwt?: string) => {
  // 이걸로 로그인도 하고 로그아웃도 할거야
  dispatch(setIsLoggedin(value));
  if (value === true && jwt) {
    AsyncStorage.setItem(AsyncAccessToken, jwt);
  }
  if (value === false) {
    AsyncStorage.removeItem(AsyncAccessToken);
  }
};

export default AuthReducer;
