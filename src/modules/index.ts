import { combineReducers } from "redux";
import blindReducer from "~/modules/product/blindReducer";
import genderColorReducer from "~/modules/join/genderColorReducer";
import reviewUploadReducer from "~/modules/product/reviewUpload/reviewUploadReducer";
import userInfoReducer from "~/modules/join/userInfoReducer";
import authReducer from "~/modules/auth"; // index까지 안들어가도 index부터 자동으로 훑어서 /index 안써줘도 됨

const rootReducer = combineReducers({
  blindReducer,
  genderColorReducer,
  reviewUploadReducer,
  userInfoReducer,
  authReducer,
});
export default rootReducer;
