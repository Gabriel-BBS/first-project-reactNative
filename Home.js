import * as React from 'react';
import { Button,View, Text } from 'react-native';


function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom:20, fontSize:20,fontWeight:'bold'}}>App de Gabriel Barbosa</Text>
        <Button 
        title="Veja minha foto de perfil"
        onPress={() => navigation.push('Perfil')}
        />
      </View>
    );
  }

  export default Home;