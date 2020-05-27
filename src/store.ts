import { createStore, Unsubscribe } from 'redux';
import rootReducer from '~/modules/index';

// interface Store {
//   dispatch: Dispatch<Action>;
//   getState(): any;
//   subscribe(listener: () => void): Unsubscribe;
//   replaceReducer(nextReducer: Reducer): Store;
// }

const store = createStore(rootReducer);

export default store;
