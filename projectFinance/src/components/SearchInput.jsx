import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default props => {
  return (
    <View>
        <Text>
            {props.title}
        </Text>
        <Text>
            {props.desc}
        </Text>
    </View>
  );
}


const style = StyleSheet.create ({

})