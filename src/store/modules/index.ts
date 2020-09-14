import { combineReducers } from "redux";

import AuthReducer, { AuthState } from "~/store/modules/auth"; // index까지 안들어가도 index부터 자동으로 훑어서 /index 안써줘도 됨
import ProductReducer, { ProductState } from "./product";
import JoinReducer, { JoinState } from "./join";
import CounterReducer, { CounterState } from "./counter-test";

export type RootState = {
  auth: AuthState;
  join: JoinState;
  product: ProductState;
  counter: CounterState;
};

const rootReducer = combineReducers({
  // key 이름은 데이터를 잘 반영해야 한다. 따라서 Reducer로 바로 쓰지 않고, key 수정해준다.
  auth: AuthReducer,
  join: JoinReducer,
  product: ProductReducer,
  counter: CounterReducer,
});

export default rootReducer;
