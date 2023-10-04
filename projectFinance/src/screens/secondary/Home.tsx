import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonIcon } from '../../components/Buttons';
import { Feather } from '@expo/vector-icons'
import Itens from '../../components/Itens';

export function Home() {
  return (
    <SafeAreaView style={style.safeArea}>
        <View style={[{ backgroundColor: '#740be3', height: 100}]}>
            <Text style={style.title}>
              Finance
            </Text>
        </View>
        <View style={[{flex: 8, backgroundColor: 'white'}]}>            
            <View style={{height: 70}}>
                <View style={style.input}>
                    <Feather name='search' size={30} color={'#740be3'} style={{flex: 1, paddingLeft: 15, alignSelf: 'center'}}/>
                    <TextInput style={{flex: 7, fontSize: 17}}
                      placeholder='Pesquisar bloco'/>
                </View>
                <View style={style.ButtonStyle}>
                    <ButtonIcon image={require('../../../assets/botao-adicionar-white.png')} />
                </View>       
            </View>
            <View style={{flex: 1, }}>
                <Itens />
            </View>

          

            {/* <View style={style.ButtonAdd}>
                <View style={style.ButtonStyle}>
                    <ButtonIcon image={require('../../../assets/botao-adicionar-white.png')} />
                </View>
            </View> */}
        </View>

    </SafeAreaView>
  );
}

const style = StyleSheet.create ({
  safeArea: {
    flexGrow: 1,
    backgroundColor: '#740be3'
  },

   title: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
   },

   input: {
    backgroundColor: '#E3E3E3',
    height: 50,
    margin: 10,
    marginRight: 80,
    marginLeft: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
   },

  ButtonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,

  },

  ButtonStyle: {
    backgroundColor: '#740be3',
    position: 'absolute',
    right: 13,
    top: 5,
    borderRadius: 30,
    height: 60,
    width: 60,
  },

})