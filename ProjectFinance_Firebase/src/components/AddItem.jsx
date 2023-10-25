import React, { useState } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    TextInput,
    Alert
} from 'react-native';

import {
    database,
    collection,
    addDoc,
} from '../config/firebaseconfig'
import { TextInputMask } from 'react-native-masked-text';


export default function AddItem(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)



    const addFinance = async () => {

        if (title.length <= 0) {
            Alert.alert('Título não informado!')
            return
        } else if (description.length <= 0) {
            Alert.alert('Descrição não informada!')
            return
        }

        try {
            const docRef = await addDoc(collection(database, "Finances"), {
                title: title,
                description: description,
                value: value
            });
        } catch (e) {
            console.warn("Error adding document: ", e);
        }


        setTitle('')
        setDescription('')
        setValue(0)
    }



    return (
        <Modal transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onCloseModal}
            animationType='slide'>
            <TouchableWithoutFeedback
                onPress={props.onCloseModal}
            >
                <View style={style.overlay}></View>
            </TouchableWithoutFeedback>
            <View style={style.container}>
                <Text style={style.header}>Nova Finança</Text>

                <View style={{ paddingTop: 15 }}>
                    <Text style={style.title}>Titulo</Text>
                    <TextInput style={style.input}
                        placeholder='Informe o título'
                        onChangeText={(title) => setTitle(title)}
                        value={title}
                    />
                </View>


                <View style={{ paddingTop: 15 }}>
                    <Text style={style.title}>Descrição</Text>
                    <TextInput style={style.input}
                        placeholder='Descrição da finança'
                        maxLength={60}
                        onChangeText={(description) => setDescription(description)}
                        value={description}
                    />
                </View>
                <View style={{ paddingTop: 15 }}>
                    <Text style={style.title}>Valor - R$</Text>
                    <TextInputMask
                        type={'money'}
                        value={value}
                        onChangeText={(value) => { setValue(value) }}
                        style={style.input}
                    />
                </View>

                <View style={style.buttons}>
                    <TouchableOpacity onPress={props.onCloseModal}>
                        <Text style={[style.button, { backgroundColor: '#e83f3f' }]}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addFinance} onPressOut={props.onCloseModal}>
                        <Text style={[style.button, { backgroundColor: '#321a9c' }]}>Salvar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}


const style = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    container: {
        flex: 2,
        backgroundColor: 'white',
    },

    header: {
        fontSize: 22,
        backgroundColor: '#740be3',
        color: 'white',
        textAlign: 'center',
        padding: 15,

    },

    title: {
        fontSize: 20,
        marginLeft: 20,

    },

    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 10,
        fontSize: 15,
        alignSelf: 'center',
        backgroundColor: '#E3E3E3',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    button: {
        margin: 10,
        marginRight: 20,
        marginTop: 20,
        paddingTop: 3,
        fontSize: 16,
        height: 30,
        width: 80,
        color: 'white',
        borderRadius: 30,
        textAlign: 'center',
    },

})