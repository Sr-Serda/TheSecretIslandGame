import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function Win({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://art.pixilart.com/cf22171bbda1f35.gif',
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
    left: -40,
    right: 0,
    bottom: 0,
  },
  button: {
    position: 'relative',
    top: 230,
    height: 40,
    width: 155,
    backgroundColor: '#F7FD04',
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 25,
    padding: 5,
    alignItems: 'center',
  },
  texto: {
    color: 'Black',
    padding: 7,
    fontWeight: 'bold',
  },
});
