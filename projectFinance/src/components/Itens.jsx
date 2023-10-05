import React from 'react';
import { 
    FlatList, 
    Image, 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'



export default props => {

    const getRightContent = () => {
        return (
            <TouchableOpacity style={style.right}
                onPress={() => props.onDelete && props.onDelete(props.id)}
            >
                <Icon name='trash' size={30} color='white' />
            </TouchableOpacity>
        )
    }

    return (
        <GestureHandlerRootView style={{  }}>
            <Swipeable 
                renderRightActions={getRightContent}
            >
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
            </Swipeable>
        </GestureHandlerRootView>
     
            
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

    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 20
    },

})
