import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Enredo({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground
          source={{ uri: 'https://images.alphacoders.com/995/995147.jpg' }}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>
          Dom Pedro III, almirante da marinha imperial do Brasil, estava
          navegando numa missão secreta do Império, na qual seria descobrir
          novas terras e riquezas para o Imperador. Alguns meses após sua
          partida, o navio de Pedro enfrenta uma forte tempestade, com ondas
          gigantescas e torrentes, que faz o navio naufragar. O almirante se vê
          em um lugar desconhecido por muitos, que mais tarde seria chamado de
          “Ilha Magmell” ...Vagando por dias apenas com os mantimentos que
          resgatou de seu navio, ele encontra Morgana, uma assassina exilada de
          sua terra, por falhar em matar o Shogun Tokugawa. Essa mulher tinha um
          único objetivo: matar o demônio rei da ilha, e voltar com suas
          riquezas para obter o perdão do imperador Dom Pedro II.Juntos nessa
          ilha decidem se unir para ir atrás desse monstro...Eles começam essa
          jornada em busca de seu alvo, na orla da praia, e se deparam com onis
          de nível inferior, que os atacam ferozmente.Após derrotar os
          onisinferiores da praia, eles seguem rumo ao interior da ilha, onde
          havia muitas florestas densas e nelas habitam os onis superiores que
          já os aguardavam...Dom Pedro III continua a sua busca pelo rei demônio
          Kang, nome que foi descoberto por conta das últimas palavras de um dos
          Onis. A luta contra ele ocorre no topo da ilha dentro do vulcão
          Kanjiro, lá dentro Kang tinha vantagem sobre o território, fazendo com
          D. Pedro tivesse muita dificuldade em derrotá-lo. Após um certo tempo
          de luta, D.Pedro começa a ficar exausto de sua intensa batalha, o
          deixando no limite...Por sua força de vontade D.Pedro mas ainda com
          muita dificuldade, ele vence Kang e sai da ilha junto com Morgana.{' '}
        </Text>
      </ScrollView>
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

  titulo: {
    position: 'relative',
    margin: 10,
    marginBottom: 60,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 15,
    borderWidth: 5,
    fontFamily: 'Rajdhani-SemiBold',

    color: '#131811',
    borderColor: 'white',
    borderEndColor: 'white',
  },
  imagem: {
    height: '110%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
});
