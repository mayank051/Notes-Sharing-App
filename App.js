import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './store/rootReducer';
let store = createStore(rootReducer);
import Navigation from './navigation';
import LoginScreen from './containers/LoginScreen';

const App = () => {
  return(
    <Provider store = {store}>
    {/* <Navigation/> */}
    <LoginScreen/>
  </Provider>
  );
}

export default App;
