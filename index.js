import { AppRegistry } from 'react-native';
import React from 'react';

// import AppRNSnackbar from './src/AppRNSnackbar';

// import App from './src/components/App';
import App2 from './src/components/App2';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';

// AppRegistry.registerComponent('rnrex_tu', () => AppRNSnackbar);
const store = configureStore();

const RNRedux = () => (
  <Provider store = { store }>
    <App2 />
  </Provider>
);
// AppRegistry.registerComponent('rnrex_tu', () => App);
AppRegistry.registerComponent(appName, () => RNRedux);




// import App from './App';
// import { name as appName } from './app.json';








