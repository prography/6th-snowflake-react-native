import { combineReducers } from "redux";

import GenderColorReducer, {
  GenderColorState,
} from "~/store/modules/join/genderColor";
import UserInfoReducer, { UserInfoState } from "~/store/modules/join/userInfo";
import AuthReducer, { AuthState } from "~/store/modules/join/auth"; // index까지 안들어가도 index부터 자동으로 훑어서 /index 안써줘도 됨

export type JoinState = {
  genderColor: GenderColorState;
  userInfo: UserInfoState;
  auth: AuthState;
};

const JoinReducer = combineReducers({
  genderColor: GenderColorReducer,
  userInfo: UserInfoReducer,
  auth: AuthReducer,
});

export default JoinReducer;
