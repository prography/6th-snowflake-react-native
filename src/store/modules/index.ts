import { combineReducers } from "redux";

import ProductReducer, { ProductState } from "./product";
import JoinReducer, { JoinState } from "./join";
import CounterReducer, { CounterState } from "./counter-test";

export type RootState = {
  join: JoinState;
  product: ProductState;
  counter: CounterState;
};

const rootReducer = combineReducers({
  // key 이름은 데이터를 잘 반영해야 한다. 따라서 Reducer로 바로 쓰지 않고, key 수정해준다.
  join: JoinReducer,
  product: ProductReducer,
  counter: CounterReducer,
});

export default rootReducer;
