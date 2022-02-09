// import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootContainer from './src/navigators/RootStackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <RootContainer />
    </SafeAreaProvider>
  );
}
