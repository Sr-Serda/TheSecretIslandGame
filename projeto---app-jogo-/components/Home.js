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

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images4.alphacoders.com/995/995128.jpg' }}
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

      <Image source={require('../assets/titulo.png')} style={styles.titulo} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Créditos')}>
        <Text style={{ color: 'white', padding: 7 }}>CRÉDITOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Enredo')}>
        <Text style={{ color: 'white', padding: 7 }}>ENREDO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jogar')}>
        <Text style={{ color: 'white', padding: 7 }}>COMO JOGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Personagens')}>
        <Text style={{ color: 'white', padding: 7 }}>PERSONAGENS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perg1')}>
        <Text style={{ color: 'white', padding: 7 }}>QUIZ</Text>
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
    width: 125,
    alignItems: 'center',
    backgroundColor: '#474E68',
    borderWidth: 3,
    borderRadius: 113,
    marginBottom: 25,
    top: -60,
  },

  titulo: {
    position: 'relative',
    height: 210,
    width: 300,
    top: 25,
  },
});
