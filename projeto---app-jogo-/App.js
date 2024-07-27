import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Rotas from './Rotas.js';

import 'react-native-gesture-handler';
import Enredo from './components/Enredo';


import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
     
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

});
