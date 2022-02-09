import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../navigation/navigationParamList';
import { CrewMembersStack, RocketsStack } from './BottomTabItemStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'RocketsStack'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          title: 'Rockets',
        }}
        name="RocketsStack"
        component={RocketsStack}
      />
      <Tab.Screen
        options={{
          title: 'Crew Members',
        }}
        name="CrewMembersStack"
        component={CrewMembersStack}
      />
    </Tab.Navigator>
  );
}
