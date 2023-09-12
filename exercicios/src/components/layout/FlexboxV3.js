import React, { useState } from 'react' 
import { Text, Button, View, StyleSheet } from 'react-native' 

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}> 
            <Quadrado cor='#FF801A' />
            <Quadrado cor='#50D1F6' />
            <Quadrado cor='#DD22C1' />
            <Quadrado cor='#8312ED' />
            <Quadrado cor='#36C9A7' />        
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})