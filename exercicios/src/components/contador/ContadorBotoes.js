import React, { useState } from 'react' 
import { Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native' 
import Estilo from '../estilo' 
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default props => {
    return (
        <View style={style.Botao}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} /> 
        </View>
    )
}

const style = StyleSheet.create ({
    Botao: {
        flexDirection: 'row',
        padding: 10
    }
})