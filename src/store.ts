import { createStore, Unsubscribe, applyMiddleware } from "redux";
import rootReducer from "~/modules/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "~/saga";

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
