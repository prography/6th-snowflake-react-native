import AsyncStorage from "@react-native-community/async-storage";

import { AsyncAccessToken } from "~/utils/asyncStorage";
import { llog } from "~/utils/functions";
import { RFetchResult, LoginRes } from "~/api/interface";
import {
  getInitialFetchResult,
  createAction,
  getActionCreator,
} from "~/utils/redux";

export type AuthState = {
  isLoggedin: boolean;
  login: RFetchResult<LoginRes>;
};

const initialState: AuthState = {
  isLoggedin: null,
  login: getInitialFetchResult<LoginRes>(),
};

// action
export const SET_IS_LOGGEDIN = "SET_IS_LOGGEDIN";
export const LOGIN = createAction("LOGIN");
export const REFRESH_TOKEN = createAction("REFRESH_TOKEN");

// action creator
export const setIsLoggedin = (isLoggedin: boolean) => {
  llog("😸12. isLoggedin에 저장!", isLoggedin);
  return {
    type: SET_IS_LOGGEDIN,
    payload: isLoggedin,
  };
};
export const loginAC = getActionCreator<LoginRes>(LOGIN);
export const refreshTokenAC = getActionCreator<LoginRes>(REFRESH_TOKEN); // TODO LoginRes인지 확인 필요

export default (state = initialState, action): AuthState => {
  llog("🏆 Action 🏆", action);
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return { ...state, isLoggedin: action.payload };
    case LOGIN.REQUEST:
    case LOGIN.SUCCESS:
    case LOGIN.ERROR:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

// TODD saga로 다 옮기면 삭제
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
