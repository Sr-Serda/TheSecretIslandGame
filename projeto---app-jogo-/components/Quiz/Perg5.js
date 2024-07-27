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

export default function Perg4({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images6.alphacoders.com/941/941436.jpg' }}
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

      <Text style={styles.titulo}>Qual o chefe de Morgana</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>A) Mahito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>B) Tokugawa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')}>
        <Text style={styles.texto}>C) Kang</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Win')}>
        <Text style={styles.texto}>D) Sun Wukong</Text>
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
    backgroundColor: '#863A6F',
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
    backgroundColor: '#863A6F',
  },
  texto: {
    color: 'white',
    padding: 7,
    fontWeight: 'bold',
  },
});
