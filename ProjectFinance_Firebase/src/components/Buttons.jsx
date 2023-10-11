import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export function ButtonWelcome({title, screen}) {
  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate(screen)
  }

  return (
        <TouchableOpacity 
            onPress={openScreen} 
            activeOpacity={0.5}
            style={style.ButtonWelcome}>
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
        <TouchableOpacity onPress={openScreen} activeOpacity={0.5}>
            <View style={{flexDirection: 'row-reverse'}}>             
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
    <TouchableOpacity 
        onPress={openScreen} 
        activeOpacity={0.7}
    >
        <Image
          source={image} 
          style={style.BtnIcon}
        />
    </TouchableOpacity>
  )
}


export function ButtonIcon({image, height, width, onPress}){

  return (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
    >
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
     
    txtInfo: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'red',
      marginRight: 15,
      marginTop: 15,
      paddingLeft: 13, 
      paddingRight: 13,
      paddingTop: 3,
      paddingBottom: 3,
      borderRadius: 30,
      backgroundColor: '#e632fa',
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