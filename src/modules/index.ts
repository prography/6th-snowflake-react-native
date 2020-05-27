import { combineReducers } from 'redux';
import blindReducer from '~/modules/blindReducer';

const rootReducer = combineReducers({
  blindReducer,
});
export default rootReducer;
