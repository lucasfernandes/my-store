import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

/* Reducers */
// ....

import configureStore from './configureStore';
import configurePersistor from './configurePersistor';

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, {
  defaultReducer: (initialState = []) => initialState,
});

const store = configureStore(rootReducer);
const persistor = configurePersistor(store);

export { store, persistor };
