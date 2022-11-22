import * as React from 'react';
import { Image,View, Text } from 'react-native';

function Perfil({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{width:300,height:300}} source={require('./assets/foto_perfil.jpeg')} />
      </View>
    );
  }

  export default Perfil;