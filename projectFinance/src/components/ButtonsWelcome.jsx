import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export function ButtonWelcome({title}) {

  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate('Aplication')
  }

  return (
        <TouchableOpacity onPress={openScreen} style={style.ButtonWelcome}>
                <Text style={style.txtWelcome}>
                    {title}
                </Text>
        </TouchableOpacity>
  );
}

export function ButtonInfo({title}) {

  const navigation = useNavigation()
  
  function openScreen(){
    navigation.navigate('Infos')
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
      borderWidth: 5,
      borderColor: '#e632fa'
    },

    txtWelcome: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    


    buttonInfo: {
      borderRadius: 15,
      backgroundColor: '#FFF', 
      marginHorizontal: 130,
      position: 'absolute',
      left: 130,
      marginTop: 10,
      padding: 5,
      backgroundColor: '#f2d5f5',
    },
    
    txtInfo: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      

    },
  })