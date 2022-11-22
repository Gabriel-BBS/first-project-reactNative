import * as React from 'react';
import { Button,View, Text } from 'react-native';
import styles from './App'


function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom:20, fontSize:20,fontWeight:'bold'}}>App de Gabriel Barbosa</Text>
        <View style={{marginBottom:20}}>
          <Button 
          title="Veja quem eu sou"
          onPress={() => navigation.push('Perfil')}
          />
        </View>
        
        <Button 
        title="Veja minha comida favorita"
        onPress={() => navigation.push('Comida')}
        />
      </View>
    );
    
  }

  export default Home;