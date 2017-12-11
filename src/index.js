/* Core */
import 'config/ReactotronConfig';
import React from 'react';

/* Redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'store';

/* Presentational */
import { View } from 'react-native';

// import styles from './styles';
const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View />
    </PersistGate>
  </Provider>
);

export default App;
