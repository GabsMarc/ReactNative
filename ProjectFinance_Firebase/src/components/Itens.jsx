import React, { useState } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInputMask } from 'react-native-masked-text'
import { deleteDoc, database, doc } from '../config/firebaseconfig'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default props => {

    const onDeleteTask = () => {
        deleteDoc(doc(database, 'Finances', props.id))
        props.refreshData(true)
    }


    const getRightContent = () => {
        return (
            <TouchableOpacity style={style.right}
                onPress={onDeleteTask}
            >
                <Icon name='trash' size={30} color='white' />
            </TouchableOpacity>
        )
    }


    const getValue = () => {

        if (props.value != '') {
            return (
                <TextInputMask
                    type={'money'}
                    value={props.value}
                    style={{ fontSize: 17, color: 'green' }}
                    editable={false}
                />
            )
        } else {
            return (
                <Text style={{ fontSize: 17, color: '#ff0000' }}>
                    Nenhum valor informado.
                </Text>
            )
        }
    }



    function alterCard(alter) {

        const navigation = useNavigation()
        
        function openScreen(id) {
            navigation.navigate('EditCard', {id: id, refreshData: props.refreshData()})
        }

        return (
            <TouchableOpacity key={props.id} style={style.edit} onPress={() => {
                Alert.alert('Alteração', 'Deseja fazer uma alteração no Card selecionado?', [
                    {
                        text: 'Não',
                    },
                    {
                        text: 'Sim',
                        onPress: () => openScreen(props.id)
                    },
                ]);
            }}>
                <Feather
                    name='edit'
                    size={25}
                    color={'#740be3'}
                />
            </TouchableOpacity>
        )
    }






    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={getRightContent}>
                <View style={style.card}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            <Image source={require('../../assets/Icon/credit-card.png')} style={style.imgIcon} />
                        </View>
                        <View style={{ flex: 4 }}>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 6, }}>
                                    <Text style={style.cardTitle}>
                                        {props.title}
                                    </Text>
                                    {getValue()}
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                                    {alterCard()}
                                </View>
                            </View>
                            <View style={{ flex: 2, marginTop: -10, }}>
                                <Text style={{ fontSize: 17, }}>
                                    {props.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
}



const style = StyleSheet.create({
    card: {
        height: 120,
        backgroundColor: '#E3E3E3',
        margin: 10,
        borderRadius: 20,
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

    edit: {
        height: 30,
        width: 30,
        borderRadius: 50,
        marginRight: 10,
        marginTop: 10
    },

})
