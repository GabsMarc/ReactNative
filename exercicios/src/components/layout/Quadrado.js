import React, { useState } from 'react' 
import { Text, Button, View, StyleSheet } from 'react-native' 
import Estilo from '../estilo' 

export default props => {

    const lado = 50

    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}/>        
    )
}

// const style = StyleSheet.create({
//     Quadrado:
// })