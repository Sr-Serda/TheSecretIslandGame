import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Pedro from './Pedro';
import Morgana from './Morgana';
import Kang from './Kang';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      labeled="true"
      activeColor="green"
      inactiveColor="white"
      barStyle={{ backgroundColor: 'black' }}
      labelStyle={{ color: 'green' }}>
      <Tab.Screen
        name="Pedro"
        component={Pedro}
        options={{
          tabBarLabel: 'Pedro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sword" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Morgana"
        component={Morgana}
        options={{
          tabBarLabel: 'Morgana',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="knife-military"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kang"
        component={Kang}
        options={{
          tabBarLabel: 'Kang',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="skull" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
