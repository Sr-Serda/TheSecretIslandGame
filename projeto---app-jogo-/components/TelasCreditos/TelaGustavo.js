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
      <ScrollView vertical style={{ backgroundColor: 'white' }}>
        <ImageBackground
          source={{ uri: 'https://images6.alphacoders.com/705/705836.jpg' }}
          style={styles.imagebackground}>
          <Text style={styles.titulo}>CRÉDITOS</Text>

          <Text style={styles.paragraph}>Nome: Gustavo Moreira Silva</Text>

          <Text style={styles.paragraph}>Idade: 17 anos</Text>

          <Text style={styles.paragraph}>
            Breve Apresentação: Desde pequeno sempre me interessei muito a
            respeito de técnologia e o "universo" em volta dela. quando descobri
            a ETEC de Taboão da Serra pude realizar que estava diante de um
            passo na carreira que eu sempre almejei, agora estou perto de
            completar essa primeira barreira que está diante de mim e chegar
            mais perto do meu sonho de me tornar um programador.
          </Text>

          <Text style={styles.paragraph}>
            Função: Programei algumas partes do projeto como a tela do menu e o
            quiz.
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  paragraph: {
    margin: 10,
    marginBottom: 55,
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
