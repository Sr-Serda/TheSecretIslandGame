import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen1 from './TelasCreditos/TelaGustavo';
import HomeScreen2 from './TelasCreditos/TelasJoao';
import HomeScreen3 from './TelasCreditos/TelasMarcello';
import HomeScreen4 from './TelasCreditos/TelasEduardo';
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
        name="Gustavo"
        component={HomeScreen1}
        options={{
          tabBarLabel: 'Gustavo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="João"
        component={HomeScreen2}
        options={{
          tabBarLabel: 'João',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Marcello"
        component={HomeScreen3}
        options={{
          tabBarLabel: 'Marcello',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Eduardo"
        component={HomeScreen4}
        options={{
          tabBarLabel: 'Eduardo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
