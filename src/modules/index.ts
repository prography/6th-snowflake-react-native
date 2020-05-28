import { combineReducers } from 'redux';
import blindReducer from '~/modules/product/blindReducer';
import genderColorReducer from '~/modules/join/genderColorReducer';

const rootReducer = combineReducers({
  blindReducer,
  genderColorReducer,
});
export default rootReducer;
