import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';

export default function Jogar({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView vertical>
          <ImageBackground
            source={{ uri: 'https://images.alphacoders.com/958/958190.png' }}
            style={styles.fundo}
          />
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.postimg.cc/26F8YdFt/115-1151607-undertale-napstablook-clipart-png-download-wasd-png-transparent-removebg-preview.png',
              }}
              style={styles.teclas}
            />

            <Text style={styles.titulo}>
              Para jogar usamos{'\n'}as teclas W, A, S, D, E,{'\n'}do teclado
              QWERTY.{'\n'}A tecla W faz com{'\n'}que o(a) personagem{'\n'}se
              mova para cima{' '}
            </Text>
          </View>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.postimg.cc/L59yQR8W/a.png',
              }}
              style={styles.teclas}
            />

            <Text style={styles.titulo}>
              A tecla "A" do teclado{'\n'}faz com que o(a){'\n'}
              personagem principal{'\n'}ande para a esquerda.{' '}
            </Text>
          </View>

          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.postimg.cc/XYkt82LX/s.png',
              }}
              style={styles.teclas}
            />

            <Text style={styles.titulo}>
              A tecla "S" do teclado{'\n'}faz com que o(a){'\n'}personagem
              principal{'\n'}ande para baixo.{' '}
            </Text>
          </View>

          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.postimg.cc/bvbDWtGG/d.png',
              }}
              style={styles.teclas}
            />

            <Text style={styles.titulo}>
              A tecla "D" do teclado{'\n'}faz com que o(a){'\n'}personagem
              principal{'\n'} ande para frente.{' '}
            </Text>
          </View>

          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://i.postimg.cc/Nj8LxwZT/tiro.gif',
              }}
              style={styles.teclas}
            />

            <Text style={styles.titulo}>
              Ao apertar a tecla{'\n'}"E" do teclado, o(a){'\n'}personagem
              principal{'\n'}
              usará, um poder{'\n'} em cima{'\n'} do seu inimigo.{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  titulo: {
    position: 'relative',
    margin: 5,
    marginBottom: 10,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    alignSelf: 'center',
    borderWidth: 5,
    fontFamily: 'Rajdhani-SemiBold',
    color: '#131811',
    borderColor: 'white',
    borderEndColor: 'white',
  },
  fundo: {
    height: '115%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
  },
  teclas: {
    position: 'relative',
    alignSelf: 'center',
    height: 100,
    width: 100,
    top: 20,
    marginBottom: 20,
    marginLeft: 5,
    alignItems: 'center',
  },
});
