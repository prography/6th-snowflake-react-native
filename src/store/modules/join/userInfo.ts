import { UserInfoRes, RFetchResult } from "~/utils/interface";

export interface UserInfoState {
  userEmail: string;
  userPassword1: string;
  userPassword2: string;
  userName: string;
  userBirthYear: number;
  userGender: string;
  userPartnerGender: string;

  userInfo: RFetchResult<UserInfoRes>;
}

const initialState: UserInfoState = {
  // 아래 7줄 회원가입에서만 쓰면 없애기
  userEmail: null,
  userPassword1: null,
  userPassword2: null,
  userName: null,
  userBirthYear: null,
  userGender: null,
  userPartnerGender: null,

  userInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

const SET_USER_EMAIL = "SET_USER_EMAIL";
const SET_USER_PASSWORD1 = "SET_PASSWORD1";
const SET_USER_PASSWORD2 = "SET_PASSWORD2";
const SET_USER_NAME = "SET_USERNAME";
const SET_USER_BIRTHYEAR = "SET_BIRTHYEAR";
const SET_USER_GENDER = "SET_GENDER";
const SET_USER_PARTNER_GENDER = "SET_PARTNER_GENDER";

// saga
export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST"; // 요청 시작
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS"; // 요청 성공
export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR"; // 요청 실패

export const setUserEmail = (userEmail: string) => ({
  type: SET_USER_EMAIL,
  userEmail: userEmail,
});
export const setUserPassword1 = (userPassword1: string) => ({
  type: SET_USER_PASSWORD1,
  userPassword1: userPassword1,
});
export const setUserPassword2 = (userPassword2: string) => ({
  type: SET_USER_PASSWORD2,
  userPassword2: userPassword2,
});
export const setUserName = (userName: string) => ({
  type: SET_USER_NAME,
  userName: userName,
});
export const setUserBirthYear = (userBirthYear: number) => ({
  type: SET_USER_BIRTHYEAR,
  userBirthYear: userBirthYear,
});
export const setUserGender = (userGender: string) => ({
  type: SET_USER_GENDER,
  userGender: userGender,
});
export const setUserPartnerGender = (userPartnerGender: string) => ({
  type: SET_USER_PARTNER_GENDER,
  userPartnerGender: userPartnerGender,
});

// saga
export const getUserInfoRequest = () => {
  const fetchResult: RFetchResult<UserInfoRes> = {
    loading: true,
    data: null,
    error: null,
  };
  return {
    type: GET_USER_INFO_REQUEST,
    userInfo: fetchResult,
  };
};
export const getUserInfoSuccess = (userInfo: UserInfoRes) => {
  const fetchResult: RFetchResult<UserInfoRes> = {
    loading: false,
    data: userInfo,
    error: null,
  };
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: fetchResult,
  };
};
export const getUserInfoError = (error: Error) => {
  const fetchResult: RFetchResult<UserInfoRes> = {
    loading: false,
    data: null,
    error,
  };
  return {
    type: GET_USER_INFO_ERROR,
    userInfo: fetchResult,
  };
};

export default (state = initialState, action): UserInfoState => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return { ...state, userEmail: action.userEmail };
    case SET_USER_PASSWORD1:
      return { ...state, userPassword1: action.userPassword1 };
    case SET_USER_PASSWORD2:
      return { ...state, userPassword2: action.userPassword2 };
    case SET_USER_NAME:
      return { ...state, userName: action.userName };
    case SET_USER_BIRTHYEAR:
      return { ...state, userBirthYear: action.userBirthYear };
    case SET_USER_GENDER:
      return { ...state, userGender: action.userGender };
    case SET_USER_PARTNER_GENDER:
      return { ...state, userPartnerGender: action.userPartnerGender };

    // saga
    case GET_USER_INFO_REQUEST:
    case GET_USER_INFO_SUCCESS:
    case GET_USER_INFO_ERROR:
      return { ...state, userInfo: action.userInfo };

    default:
      return state;
  }
};
