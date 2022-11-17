/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Initial from './src/navigations/Initial';

const App = () => {
  return (
    <NavigationContainer>
      <Initial />
    </NavigationContainer>
  );
};

export default App;
