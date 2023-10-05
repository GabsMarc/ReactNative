import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default props => {

    return (
    <View style={style.card}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image source={require('../../assets/Icon/credit-card.png')} style={style.imgIcon}/>
            </View>
            <View style={{flex: 4}}>
                <Text style={style.cardTitle}>
                    {props.title}
                </Text>
                <Text>
                    {props.desc}
                </Text>
            </View>
        </View>     
    </View>
     
            
  );
}



const style = StyleSheet.create ({
    card: {
        height: 110,
        backgroundColor: '#E3E3E3',
        margin: 10,
        borderRadius: 20
        
    },  

    cardTitle: {
        color: '#740be3', 
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 5, 
    },

    imgIcon: {
        height: 80,
        width: 80,
    },

})
