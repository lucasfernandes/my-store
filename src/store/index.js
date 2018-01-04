import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as categories } from './ducks/categories';
import { reducer as categoryProducts } from './ducks/categoryProducts';
import { reducer as cart } from './ducks/cart';

import configureStore from './configureStore';
import rootSaga from './sagas';
import configurePersistor from './configurePersistor';

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, {
  nav: navReducer,
  categories,
  categoryProducts,
  cart,
});

const store = configureStore(rootReducer, rootSaga);
const persistor = configurePersistor(store);

export { store, persistor };
