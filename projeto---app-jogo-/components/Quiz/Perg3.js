import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

export default function Perg3({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images4.alphacoders.com/962/962966.jpg' }}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Text style={styles.titulo}>Como D.Pedro chegou a ilha?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>A) De navio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>B) naufragado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>C) Caiu de meteóro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perg4')}>
        <Text style={styles.texto}>D) Uma missão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 155,
    alignItems: 'left',
    backgroundColor: '#1E041F',
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 25,
    padding: 5,
  },

  titulo: {
    height: 100,
    position: 'relative',
    margin: 5,
    marginBottom: 10,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 35,

    alignSelf: 'left',
    borderWidth: 0,
    borderRadius: 10,
    fontFamily: 'Rajdhani-SemiBold',
    color: 'white',
    backgroundColor: '#1E041F',
  },
  texto: {
    color: 'white',
    padding: 7,
    fontWeight: 'bold',
  },
});
