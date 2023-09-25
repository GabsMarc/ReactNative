import React from 'react';
import { View, 
         Button, 
         StyleSheet, 
         TouchableOpacity, 
         Text,
         Image,
        } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonWelcome, ButtonInfo } from '../components/ButtonsWelcome';
import { ImagemWelcome } from '../components/ImageWelcome';
import { TextWelcome } from '../components/TextWelcome';



export function Welcome() {
  const navigation = useNavigation()
  

  function openScreen(){
    navigation.navigate('Signup')
  }

  return (
    <SafeAreaView style={style.SafeArea}>

      <View style={{flex: 1}}>
        <ButtonInfo title={'Mais Informações'} />
      </View>

      <View style={{ flex: 5, justifyContent: 'center'}}>
          <ImagemWelcome />
      </View>  

      <View style={{flex: 4}}>
          <TextWelcome />
      </View>
      
      <View style={{flex: 2}}>
          <ButtonWelcome title={'Acessar'} />       
      </View>  
    </SafeAreaView>
  );
}


const style = StyleSheet.create ({
  SafeArea: {
    flexGrow: 5,
    backgroundColor: '#740be3', //Roxo
    
  },


})