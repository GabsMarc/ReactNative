import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export function ButtonWelcome({title, screen}) {
  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate(screen)
  }

  return (
        <TouchableOpacity onPress={openScreen} style={style.ButtonWelcome}>
                <Text style={style.txtWelcome}>
                    {title}
                </Text>
        </TouchableOpacity>
  );
}



export function ButtonInfo({title, screen}) {
  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate(screen)
  }

  return (
        <TouchableOpacity onPress={openScreen}>
            <View style={style.buttonInfo}>
                <Text style={style.txtInfo}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
  );
}


export function ButtonReturn({screen, image}){
  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate(screen)
  }

  return (
    <TouchableOpacity onPress={openScreen} >
        <Image
          source={image} 
          style={style.BtnIcon}
        />
    </TouchableOpacity>
  )
}


export function ButtonIcon({image, height, width}){

  return (
    <TouchableOpacity>
        <Image
          source={image} 
          style={[style.BtnIcon, {height: height, width: width}]}
        />
    </TouchableOpacity>
  )
}


const style = StyleSheet.create ({
    ButtonWelcome: { 
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30,
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#e632fa', 

    },

    txtWelcome: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white'
    },
    


    buttonInfo: {
      borderRadius: 15,
      backgroundColor: '#FFF', 
      marginHorizontal: 130,
      position: 'absolute',
      left: 210,
      marginTop: 10,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#e632fa',
    },
    
    txtInfo: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'

    },

    
    btnReturn: {
      borderRadius: 30,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginLeft: 20
    },

    BtnIcon: {
      width: 45,
      height: 45,
       
    }



  })