import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './components/Home';
import PerfilScreen from './components/Perfil';
import Enredo from './components/Enredo';
import Jogar from './components/Jogar';
import Personagens from './components/HistPer/Personagens';
import Perg1 from './components/Quiz/Perg1';
import Perg2 from './components/Quiz/Perg2';
import Perg3 from './components/Quiz/Perg3';
import Perg4 from './components/Quiz/Perg4';
import Perg5 from './components/Quiz/Perg5';
import Win from './components/Quiz/Win';
import GameOver from './components/Quiz/GameOver';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Menu',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Créditos"
          component={PerfilScreen}
          options={{
            title: 'Desenvolvedores',
            headerStyle: {
              backgroundColor: '#2C3639',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Enredo"
          component={Enredo}
          options={{
            title: 'História',
            headerStyle: {
              backgroundColor: '#2C3639',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Jogar"
          component={Jogar}
          options={{
            title: 'Como Jogar',
            headerStyle: {
              backgroundColor: '#2C3639',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Drawer.Screen
          name="Personagens"
          component={Personagens}
          options={{
            title: 'Personagens',
            headerStyle: {
              backgroundColor: '#2C3639',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Drawer.Screen
          name="Perg1"
          component={Perg1}
          options={{
            title: 'Quiz',
            headerStyle: {
              backgroundColor: '#2C3639',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            /* headerLeft:null*/
          }}
        />

        <Drawer.Screen
          name="Perg2"
          component={Perg2}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Perg3"
          component={Perg3}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Perg4"
          component={Perg4}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Perg5"
          component={Perg5}
          options={{
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="GameOver"
          component={GameOver}
          options={{
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Win"
          component={Win}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
