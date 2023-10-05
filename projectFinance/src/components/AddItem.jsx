import React, { Component } from 'react';
import { View, 
         Modal, 
         StyleSheet, 
         TouchableWithoutFeedback, 
         TouchableOpacity,
         Text,
         TextInput  
} from 'react-native';

const initialState = { title: '', desc: '' }

export default class AddItem extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newFinance = {
            title: this.state.title,
            desc: this.state.desc  
        }

        if(this.props.onSave) {
            this.props.onSave(newFinance)
            this.setState({ ...initialState })
        }
    }

    render() {
        return (
            <Modal transparent={true} 
                   visible={this.props.isVisible} 
                   onRequestClose={this.props.onCancel} 
                   animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={style.overlay}></View>
                </TouchableWithoutFeedback>
                <View style={style.container}>
                    <Text style={style.header}>Nova tarefa</Text>
                    <TextInput style={style.input}
                        placeholder='Informe o título'
                        onChangeText={title => this.setState({ title })}
                        value={this.state.title}
                    />
                    <TextInput style={style.input}
                        placeholder='Informe sobre finança'
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc}
                    />
                    <View style={style.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={[style.button, {backgroundColor: '#e83f3f' }]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={[style.button, {backgroundColor: '#321a9c'}]}>Salvar</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
        )
    }
}

const style = StyleSheet.create ({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    container: {
        flex: 2,
        backgroundColor: 'white'
    },

    header: {
        fontSize: 20,
        backgroundColor: '#740be3', 
        color: 'white',
        textAlign: 'center', 
        padding: 15,
      
    },

    input: {
        fontSize: 15,
        width: '90%',
        height: 40,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#E3E3E3',
        borderRadius: 20,
        paddingLeft: 10,

    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    button: {
        margin: 10,
        marginRight: 20,
        fontSize: 16,
        color: 'white', 
        height: 30,
        width: 80,
        borderRadius: 30,
        textAlign: 'center',
        paddingTop: 3
    },

})