import { combineReducers } from 'redux';
import blindReducer from '~/modules/product/blindReducer';
import genderColorReducer from '~/modules/join/genderColorReducer';
import reviewUploadReducer from '~/modules/product/reviewUpload/reviewUploadReducer';
import userInfoReducer from '~/modules/join/userInfoReducer';
const rootReducer = combineReducers({
  blindReducer,
  genderColorReducer,
  reviewUploadReducer,
  userInfoReducer,
});
export default rootReducer;
