import { combineReducers } from 'redux';
import blindReducer from '~/modules/product/blindReducer';
import genderColorReducer from '~/modules/join/genderColorReducer';
import reviewUploadReducer from '~/modules/product/reviewUpload/reviewUploadReducer';

const rootReducer = combineReducers({
  blindReducer,
  genderColorReducer,
  reviewUploadReducer,
});
export default rootReducer;
