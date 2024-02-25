/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Root from './src';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

function App(): React.JSX.Element {
  return <Root />;
}

export default App;
