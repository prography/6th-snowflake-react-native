import { combineReducers } from "redux";

import GenderColorReducer, { GenderColorState } from "./genderColor";
import UserInfoReducer, { UserInfoState } from "./userInfo";

export type JoinState = {
  genderColor: GenderColorState;
  userInfo: UserInfoState;
};

const JoinReducer = combineReducers({
  genderColor: GenderColorReducer,
  userInfo: UserInfoReducer,
});

export default JoinReducer;
