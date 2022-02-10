import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { localizeString } from 'i18n';
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
          title: localizeString('Rockets'),
        }}
        name="RocketsStack"
        component={RocketsStack}
      />
      <Tab.Screen
        options={{
          title: localizeString('Crew_Members'),
        }}
        name="CrewMembersStack"
        component={CrewMembersStack}
      />
    </Tab.Navigator>
  );
}
