import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default props => {

  const [searchQuery, setSearchQuery] = useState('')


  return (
    <View style={[{justifyContent: 'center'}, style.input]}>
       <TouchableOpacity 
            style={{flex: 1, paddingLeft: 15, paddingRight: 5, alignSelf: 'center'}}
       >
       <Feather 
            name='search' 
            size={30} 
            color={'#740be3'}
       />
       </TouchableOpacity>
       <TextInput
          placeholder='Pesquisar bloco'
          style={{flex: 7 ,fontSize: 17}}
          value={props.searchQuery(searchQuery)}
          onChangeText={setSearchQuery}
          
          />
    </View>
  );
}



const style = StyleSheet.create ({
  input: {
    backgroundColor: '#E3E3E3',
    height: 50,
    margin: 10,
    marginRight: 75,
    marginLeft: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
})

