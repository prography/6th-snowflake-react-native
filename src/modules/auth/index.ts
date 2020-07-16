import AsyncStorage from "@react-native-community/async-storage";

import { AsyncAccessToken } from "~/utils/asyncStorage";

export interface State {
  isLoggedin: boolean;
}

const initialState: State = {
  isLoggedin: null,
};

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const SET_IS_LOGGEDIN = "SET_IS_LOGGEDIN";

export const requestLogin = (email: string, password: string) => {
  console.log("😸6. requestLogin 액션 dispatch");
  return {
    type: REQUEST_LOGIN,
    email,
    password,
  };
};
export const setIsLoggedin = (isLoggedin: boolean) => {
  console.log("😸12. isLoggedin에 저장!", isLoggedin);
  return {
    type: SET_IS_LOGGEDIN,
    isLoggedin,
  };
};

const authReducer = (state = initialState, action) => {
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

export default authReducer;
