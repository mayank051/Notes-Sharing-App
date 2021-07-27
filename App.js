import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from './navigation';
import LoginScreen from './containers/LoginScreen';
import configureStore from './store/configureStore';
const { store, persistor } = configureStore();

const App = () => {

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;
