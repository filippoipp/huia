
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes'

import {
  Text, View,
} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
