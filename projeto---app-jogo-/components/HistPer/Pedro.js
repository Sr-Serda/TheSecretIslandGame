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

export default function Pedro({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground
          source={{ uri: 'https://images2.alphacoders.com/963/963940.png' }}
          style={styles.imagem}
        />
        <Image
          source={{
            uri: 'https://i.postimg.cc/jSTNsvVQ/output-onlinegiftools-2.gif',
          }}
          style={styles.pedro}
        />
        <Text style={styles.titulo}>
          D. Pedro III: Príncipe sucessor do Trono e escolhido para ser
          almirante da Marinha do Império, tem 23 anos de idade, se tornando o
          almirante mais novo, recebeu esse título devido a diversos feitos ao
          decorrer dos anos. Nascido na capital do Império Português, e treinado
          desde cedo para combater os inimigos da nação, e tendo se destacado
          dentre todos, foi convocado pelo próprio Imperador, que também é o seu
          pai, para o festival “Dança das Espadas”, no qual as espadas escolhem
          o seu portador, por ter uma convicção muito forte e muito foco em seus
          objetivos, foi escolhido por uma das espadas Relíquias, uma espada
          Lendária chamada “Soul Cutter” que do mesmo modo que D. Pedro III tem
          um ataque forte que precisa de muito foco para acertar pois realiza
          cortes no ar capaz de ferir criaturas de todos os planos e capaz de
          matar a alma dos adversários. O Império de Portugal já dominava muitos
          lugares na região da Europa, porém, enfrentavam muitos inimigos fortes
          perto da região da África e necessitavam de muitos recursos monetários
          e bens materiais para manter-se na guerra duradora, por isso havia a
          necessidade de começar negócios e rotas com o Continente Americano, e
          talvez rotas estratégicas para as guerras. Designado a uma missão
          secreta de adquirir uma rota segura até o continente americano, para
          futuras rotas comerciais e rotas estratégicas para guerras, porém
          imprevistos ocorreram....{' '}
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
    borderTopColor: '#962903',
    borderEndColor: '#2c3e5e',
    borderBottomColor: '#962903',
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
