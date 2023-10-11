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
import { ButtonWelcome, ButtonInfo } from '../../components/Buttons';
import { ImagemWelcome } from '../../components/ImageWelcome';
import { TextWelcome } from '../../components/TextWelcome';



export function Welcome() {

  return ( 
    <SafeAreaView style={style.SafeArea}>

        <View style={{flex: 1}}>
            <ButtonInfo title={'Sobre'} screen={'Infos'} /> 
        </View>

        <View style={{flex: 5, justifyContent: 'center'}}>
            <ImagemWelcome />
        </View>  

        <View style={{flex: 4}}>
            <TextWelcome />
        </View>
        
        <View style={{flex: 2}}>
            <ButtonWelcome title={'Acessar'} screen={'Aplication'} />       
        </View>  
    </SafeAreaView>
  );
}


const style = StyleSheet.create ({
  SafeArea: {
    flexGrow: 1,
    backgroundColor: '#740be3', //Roxo
    
  },


})