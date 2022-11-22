import * as React from 'react';
import { Image,View, Text } from 'react-native';

function Comida({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lasanha</Text>
        <Image style={{width:300,height:300}} source={require('./assets/lasanha.jpeg')} />
      </View>
    );
  }
  
  export default Comida;