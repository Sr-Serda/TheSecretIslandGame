import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function GameOver({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.postimg.cc/3Ns1B1t8/1000-F-166179483-t-Yp1-XWIIFg-DIr-Xxaln-Dgeh-ZCRTH8ny-ZX-removebg-preview.png',
        }}
        style={styles.imagem}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.texto}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  imagem: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  button: {
    position: 'relative',
    top: 230,
    height: 40,
    width: 155,
    backgroundColor: '#461111',
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 25,
    padding: 5,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    padding: 7,
    fontWeight: 'bold',
  },
});
