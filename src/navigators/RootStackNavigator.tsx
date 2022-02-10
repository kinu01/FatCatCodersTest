import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import MainStackNavigator from './MainStackNavigator';
import { navigationRef } from './navigation/RootNavigation';
import useInternetConnection from '../hooks/useInternetConnection';

export default function RootContainer() {
  useInternetConnection();
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
      <Toast />
    </NavigationContainer>
  );
}
