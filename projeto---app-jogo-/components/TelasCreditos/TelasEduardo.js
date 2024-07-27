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

          <Text style={styles.paragraph}>Nome:Eduardo Cintra Santana</Text>

          <Text style={styles.paragraph}>Idade: 17 anos</Text>

          <Text style={styles.paragraph}>
            Breve Apresentação: Me chamo Eduardo e desde pequeno me interesso
            por programação de jogos e animação japonesa, por conta disso,
            escolhi me profissionalizar nessa área fazendo o curso técnico da
            ETEC de Taboão da Serra. No meu tempo livre jogo videogame, assisto
            animes, leio HQ’s e mangás e jogo futebol.
          </Text>

          <Text style={styles.paragraph}>
            Função: Criei a história do boss final do jogo, fiz uma pergunta
            para o quiz, e programei certas partes do app.
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
