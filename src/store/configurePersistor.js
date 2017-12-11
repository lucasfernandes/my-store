import { persistStore } from 'redux-persist';

export default (store) => {
  const persistor = persistStore(store);

  return persistor;
};

