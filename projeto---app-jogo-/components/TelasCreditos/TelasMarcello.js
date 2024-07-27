import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground
          source={{ uri: 'https://images6.alphacoders.com/705/705836.jpg' }}
          style={styles.imagebackground}>
          <Text style={styles.titulo}>CRÉDITOS</Text>

          <Text style={styles.paragraph}>Nome: Marcello Lucas Luz</Text>

          <Text style={styles.paragraph}>Idade: 17 anos</Text>

          <Text style={styles.paragraph}>
            Breve Apresentação:Gosto de design e tudo que envolve arte,
            participar da criação do The secret Island foi um passo muito grande
            e muito bom em minha carreira, criar os cenários os personagens foi
            um avanço e tanto nas minhas habilidades.
          </Text>

          <Text style={styles.paragraph}>
            Função: Criei as telas do aplicativo (design) e como onde cada
            objeto ficaria.
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'white',
    padding: 0,
  },
  paragraph: {
    margin: 10,
    marginBottom: 59,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 10,
    borderWidth: 2,
    borderBottomColor: 'white',
    color: 'white',
  },

  titulo: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  imagebackground: {
    height: '110%',
  },
});
