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

export default function Kang({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground
          source={{ uri: 'https://images2.alphacoders.com/963/963940.png' }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: 'https://i.postimg.cc/Xvg14xsT/output-onlinegiftools-4.gif',
          }}
          style={styles.pedro}
        />
        <Text style={styles.titulo}>
          Kang: sua história é contada por uma lenda muito distante, antigos
          diziam que ele era um antigo general muito obediente de um dos deuses
          do caos, se alimentava das guerras e intrigas que acontecia num mundo
          bem distante, com uma personalidade que queria apenas lutar e destruir
          inimigos mais fortes, uma vez, talvez pela falta de bom senso, ele
          desejou lutar contra seu próprio padroeiro, o Deus da Maldição, não
          sendo uma boa ideia, após desferir seu melhor ataque... não aconteceu
          nada com o tal deus que se irritou e o amaldiçoou e o jogou em uma
          antiga ilha flutuante, o selando por lá. Passando se anos, muitas
          guerras entre os deuses caoticos e logo depois entre os deuses da
          ordem acontecessem, trazendo o mundo muitas guerras e tesouros
          chamados relíquias, armas com propriedades mágicas, aconteceu que uma
          arma chamada "Nemessis" um machado um tanto quanto gigante, acabou
          rompendo as linhas da magia, impedindo o uso dela sem uma das
          relíquias. Fazendo a ilha despencar e o Fang despertar de seu sono.
          Por despertar e explorar a ilha toda, não encontrou nada além de
          antigos livros de magia e tesouros de conhecimento dos antigos.
          Felizmente ele tinha muito tempo para estudar, pois estava preso
          naquela ilha, procurava algo para se entreter. Aprendeu a mexer com
          espíritos, fazendo eles infestarem a ilha por conta dos diversos teste
          e falhas com a magia.{' '}
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 10,
    borderWidth: 5,
    fontFamily: 'Rajdhani-SemiBold',

    color: '#131811',
    borderTopColor: '#4e423c',
    borderEndColor: '#364038',
    borderBottomColor: '#4e423c',
    borderLeftColor: '#364038',
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
