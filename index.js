/** @format */

// import { AppRegistry, YellowBox } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import codePush from 'react-native-code-push';

import App from './App';
import { name as appName } from './app.json';
import reducers from './redux/reducers';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);
let FinalApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// codepush setting
const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
FinalApp = codePush(codePushOptions)(FinalApp);

AppRegistry.registerComponent(appName, () => FinalApp);

// 忽略部分提醒事项
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
  'Remote debugger',
]);
