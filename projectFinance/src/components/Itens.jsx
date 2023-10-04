import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';


const Itens = () => {
    const data = [
        'Cartão',
        'Cartão',
        'Cartão',
        'Cartão',
        'Cartão',
        'Cartão',
        'Boleto'
    ]


    return (

        <FlatList
            data={data} 
            renderItem={({item, index}) => (
                <View style={style.card}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Image source={require('../../assets/Icon/credit-card.png')} style={style.imgIcon}/>
                        </View>
                        <View style={{flex: 4}}>
                            <Text style={style.cardTitle}>
                                {item}
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, corporis. Ullam ab illum molestiae! Tempora provident deleniti cupiditate nesciunt dolore accusamus, maxime porro obcaecati aliquid 
                            </Text>
                        </View>
                    </View>     
                </View>
     
            )}
        />
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


export default Itens