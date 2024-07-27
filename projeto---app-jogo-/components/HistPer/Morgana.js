import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

export default function Morgana({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground
          source={{ uri: 'https://images2.alphacoders.com/963/963940.png' }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: 'https://i.postimg.cc/9QV6G4wt/output-onlinegiftools-3.gif',
          }}
          style={styles.pedro}
        />
        <Text style={styles.titulo}>
          Morgana: Assassina de muito prestigio, trabalhando para diversos
          governantes, mas sempre fiel a sua nação, trabalhando para uma
          organização do governo, tem perto dos 25 anos de idade, de aparência
          inofensiva, normalmente vestida com um manto em suas missões e assume
          a identidade de corsária para se disfarçar. Após receber a missão de
          assassinar um certo governante chamado Tokugawa, e falhar por conta de
          uma traição de dentro da própria organização, foi denunciada e
          deportada, pois não havia provas que ela realmente iria atentar contra
          a vida do governador. Após sua falha, foi exilada de sua pátria que
          tanto amava, inconformada e muito triste, acabou indo ao covil dos
          piratas, Ilha da Caveira, no qual começou a ouvir certas histórias de
          muitos marujos em que havia uma ilha com muitos tesouros, porém com
          perigos inimagináveis... Tal ilha apareceria no meio do Oceano em toda
          Lua Cheia se realizado certos requisitos: - Muitas mortes, perto de 30
          pessoas de acordo com os relatos; - Um sacrifício de uma relíquia ou
          tesouro de grande valor, basicamente jogar ele na água; Após receber
          tais informações, ela sem hesitar muito, esperou chegar a Lua cheia, e
          invadiu um pequeno navio de combate, com mais ou menos mais de 63
          tripulantes, e com suas habilidades afiadas, foi assassinando cada um,
          até que só houvesse ela abordo. Uma parte já havia sido realizada,
          porém no momento do sacrifício, ela iria sacrificar sua própria adaga,
          uma adaga de um antigo herói denominado Eco, O Andarilho das Sombras,
          cujo permitia usar uma energia das sombras para atingir seus
          adversários, e quando envenenada, lançaria uma chamas verde, capaz de
          derreter e queimar a alma do alvo, denominada Chamas de Hades. Porém,
          ela não podia desaparecer com sua arma, afinal, não se sabe o que pode
          ter na ilha, por isso amarrou uma corda na adaga e e colocou na água,
          quando tal coisa aconteceu, a adaga foi puxada para baixo, fazendo
          surgir um enorme vortex de energia em um certo local ao Norte, fazendo
          a ilha aparecer de uma forma reluzente, porém... ela puxou a adaga de
          volta com a corda, e no mesmo instante, uma tempestade surgiu em volta
          da ilha e grandes ondas arrastaram tudo pra dentro da Ilha, junto
          disso tudo, acontecendo havia umnavio passando perto, e este foi
          arrastado para lá, Morgana enfrentou o mar revoltado e conseguiu
          atracar o navio, sem muitos danos críticos, e lá começaria sua
          caçada...{' '}
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
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 10,
    borderWidth: 5,
    fontFamily: 'Rajdhani-SemiBold',

    color: '#131811',
    borderTopColor: '#104b22',
    borderEndColor: '#2c3e5e',
    borderBottomColor: '#104b22',
    borderLeftColor: '#2c3e5e',
  },
  imagem: {
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  pedro: {
    position: 'relative',
    alignSelf: 'center',
    height: 280,
    width: 300,
    top: 0,
  },
});
