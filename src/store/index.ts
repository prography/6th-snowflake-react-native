import { createStore, Unsubscribe, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "~/store/saga";
import rootReducer from "./modules";

// interface Store {
//   dispatch: Dispatch<Action>;
//   getState(): any;
//   subscribe(listener: () => void): Unsubscribe;
//   replaceReducer(nextReducer: Reducer): Store;
// }

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
