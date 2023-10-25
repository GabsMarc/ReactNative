import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import {
  getDoc,
  doc,
  database,
  getDatabase,
  set,
  ref,
  addDoc,
  collection,
  updateDoc
} from '../../config/firebaseconfig';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputMask } from 'react-native-masked-text';
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'


export function EditCard({ navigation, route }) {

  const [Title, onTitle] = useState('')
  const [Description, onDescription] = useState('')
  const [Value, onValue] = useState('')


  async function getTask() {
    const docSnap = await getDoc(doc(database, 'Finances', `${route.params.id}`));
    let lista = []

    lista = [docSnap.data()]

    onTitle(`${lista.map((lista) => lista.title)}`)
    onDescription(`${lista.map((lista) => lista.description)}`)
    onValue(`${lista.map((lista) => lista.value)}`)

  }


  useEffect(() => {
    getTask()
  }, [])


  function updateTask() {

    if (Title.length <= 0) {
      Alert.alert('Título não informado!')
      return
  } else if (Description.length <= 0) {
      Alert.alert('Descrição não informada!')
      return
  }

    updateDoc(doc(database, "Finances", `${route.params.id}`), {
      title: Title,
      description: Description,
      value: Value
    });

    setTimeout(function () { Alert.alert('Alteração salva com sucesso!') }, 1000);

  }



  function refreshData(onRefresh) {

    if (onRefresh === true) {
      getTask()
    }
  }


  function getValue() {

    if (`${Value}` != '') {
      return (
        <TextInputMask
          type={'money'}
          value={`${Value}`}
          style={[style.textValue, { fontWeight: 'bold' }]}
          editable={false}
        />
      )
    } else {
      return (
        <Text style={[style.textValue, { color: '#ff0000' }]}>
          Nenhum valor informado.
        </Text>
      )
    }
  }





  return (
    <View style={style.container}>
      <View style={style.cardArea}>
        <Animatable.View style={style.card}
          animation='fadeInDown'
          delay={300}
        >
          <View style={style.cardStyle}>

            <View style={{ flex: 2, padding: 10, }}>
              <Text style={style.Description}>Título: </Text>
              <Text style={style.cardText}>
                {Title}
              </Text>
            </View>

            <View style={{ flex: 3, padding: 10, }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.Description}>Valor:</Text>
                {getValue()}
              </View>
            </View>

            <View style={style.viewDescription}>
              <Text style={style.cardDescription}>
                {Description}
              </Text>
            </View>

          </View>
        </Animatable.View>
      </View>
      <Animatable.View style={style.updateArea}
        animation='fadeIn'
        delay={300}
      >

        <View>
          <Text style={style.updateTitle}>Informe abaixo o novo valor dos campos!</Text>
        </View>

        <View style={{ alignContent: 'center' }}>


          <View style={[{}, style.input]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInput
                placeholder='Informe o novo Título'
                value={Title}
                onChangeText={(title) => { onTitle(title) }}
                style={{ flex: 1, fontSize: 17 }}
              />
              <TouchableOpacity
                onPress={() => { onTitle('') }}
              >
                <Feather
                  name='x'
                  size={30}
                  color={'#740be3'}
                  style={{ paddingTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>


          <View style={[{}, style.input]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInput
                placeholder='Informe a nova Descrição'
                value={Description}
                onChangeText={(description) => { onDescription(description) }}
                style={{ flex: 1, fontSize: 17 }}
              />
              <TouchableOpacity
                onPress={() => { onDescription('') }}
              >
                <Feather
                  name='x'
                  size={30}
                  color={'#740be3'}
                  style={{ paddingTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>



          <View style={[{}, style.input]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInputMask
                placeholder='Informe um Valor'
                type={'money'}
                value={Value}
                onChangeText={(value) => { onValue(value) }}
                style={{ flex: 1, fontSize: 17 }}
              />
              <TouchableOpacity
                onPress={() => { onValue('') }}>
                <Feather
                  name='x'
                  size={30}
                  color={'#740be3'}
                  style={{ paddingTop: 10 }}
                />
              </TouchableOpacity>
            </View>

          </View>



          <View style={{ alignItems: 'center', paddingTop: 50 }}>
            <TouchableOpacity
              style={style.buttonSave}
              onPress={updateTask}
            >
              <Text style={{ fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Animatable.View>
    </View>
  );
}



const style = StyleSheet.create({
  container: {
    // height: '100%',
    flex: 1,
    backgroundColor: '#740be3',

  },

  cardArea: {
    // height: 350,
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingTop: 20,

  },

  card: {
    backgroundColor: '#740be3',
    width: '85%',
    height: 220,
    borderRadius: 13,
    alignSelf: 'center',
    elevation: 50,

  },

  cardStyle: {
    flex: 1,

  },

  Description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 10

  },

  cardText: {
    fontSize: 18,
    paddingLeft: 10,
    color: 'white'
  },

  cardDescription: {
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textValue: {
    color: '#22de18',
    fontSize: 20,
  },

  viewDescription: {
    flex: 3,
    backgroundColor: 'gray',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },

  updateArea: {
    flex: 3,
    backgroundColor: '#740be3',
    paddingTop: 50
  },

  updateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingBottom: 20,
    color: 'white'

  },

  input: {
    margin: 10,
    height: 50,
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
  },

  buttonSave: {
    width: '30%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30

  },


})