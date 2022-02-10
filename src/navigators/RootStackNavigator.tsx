import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import MainStackNavigator from './MainStackNavigator';
import { navigationRef } from './navigation/RootNavigation';

export default function RootContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
      <Toast />
    </NavigationContainer>
  );
}
