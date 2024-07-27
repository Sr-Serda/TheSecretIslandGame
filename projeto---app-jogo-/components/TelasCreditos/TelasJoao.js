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

          <Text style={styles.paragraph}>Nome: João Vitor Araújo de Souza</Text>

          <Text style={styles.paragraph}>Idade: 16 anos</Text>

          <Text style={styles.paragraph}>
            Breve Apresentação: Meu nome é João Vitor Araújo de Souza, tenho 16
            anos e antes de entrar na ETEC, não tinha muito interesse no curso
            de Desenvolvimento de Sistemas e estava decidido que iria cursar
            administração, mas após uma grande insistência de um primo e amigo,
            decidi cursar nesta área. Com o passar do tempo, fiquei fascinado e
            acabei gostando muito do curso, que será de grande ajuda no mercado
            de trabalho. No meu tempo livre, gosto de jogar futebol, truco,
            vídeo game e sair/viajar com os amigos.
          </Text>

          <Text style={styles.paragraph}>
            Função: Criação da história da Aberração Incandescente, um dos
            vilões do jogo; uma das perguntas do quiz e a programação de partes
            do aplicativo.
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
