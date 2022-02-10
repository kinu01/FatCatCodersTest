import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { localizeString } from 'i18n';
import { BottomTabParamList } from '../navigation/navigationParamList';
import { CrewMembersStack, RocketsStack } from './BottomTabItemStack';
import Icon from 'react-native-vector-icons/Ionicons';

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
          tabBarIcon: ({ focused, color, size }) => {
            const name = focused ? 'md-rocket-sharp' : 'md-rocket-outline';
            return <Icon name={name} color={color} size={size} />;
          },
        }}
        name="RocketsStack"
        component={RocketsStack}
      />
      <Tab.Screen
        options={{
          title: localizeString('Crew_Members'),
          tabBarIcon: ({ focused, color, size }) => {
            const name = focused ? 'people-sharp' : 'people-outline';
            return <Icon name={name} color={color} size={size} />;
          },
        }}
        name="CrewMembersStack"
        component={CrewMembersStack}
      />
    </Tab.Navigator>
  );
}
