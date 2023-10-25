import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonIcon } from '../../components/Buttons';
import { Feather } from '@expo/vector-icons'
import Itens from '../../components/Itens';
import AddItem from '../../components/AddItem';
import { database, collection, getDocs, } from '../../config/firebaseconfig';
import * as Animatable from 'react-native-animatable'



export default function Home() {

  const [task, setTask] = useState([])
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);


  const getFinanceData = async () => {
    let querySnapshot = await getDocs(collection(database, "Finances"));
    let list = []
    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), id: doc.id })
    })
    setTask(list)
  }

  useEffect(() => {
    getFinanceData()
  }, [])

  useEffect(() => {
    setFilter(
      Object.values(task).filter((title) =>
        title.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, task])



  function refreshData(onRefresh) {

    if (onRefresh === true) {
      setRefreshing(true)
      setTimeout(() => {
        getFinanceData()
        setRefreshing(false)
      }, 500);
    }
  }

  function onCloseModal() {
    setModalVisible(false)
    refreshData(true)
  }

  return (
    <SafeAreaView style={style.safeArea}>
      <AddItem isVisible={modalVisible}
        onCloseModal={onCloseModal}
      />
      <View style={[{ backgroundColor: '#740be3', height: 100 }]}>
        <Text style={style.title}>
          Finance
        </Text>
      </View>
      <View style={[{ flex: 8, backgroundColor: 'white' }]}>
        <View style={{ height: 70 }}>
          <View style={[{ justifyContent: 'center' }, style.input]}>
            <Feather
              name='search'
              size={30}
              color={'#740be3'}
              style={{ flex: 1, paddingLeft: 15, paddingRight: 5, alignSelf: 'center' }}
            />
            <TextInput
              placeholder='Pesquisar bloco'
              style={{ flex: 7, fontSize: 17 }}
              onChangeText={setSearch}

            />
          </View>
          <View style={style.ButtonStyle}>
            <ButtonIcon
              image={require('../../../assets/botao-adicionar-white.png')}
              height={50}
              width={50}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <Animatable.View style={{ flex: 1, }}
          animation="fadeInUp"
          delay={400}
        >
          <ScrollView
            style={{ marginBottom: '12%' }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => refreshData(true)}
                colors={["#740be3"]}
                style={{}}
              />
            }>

            {
              filter.map((tasks) => {
                return (
                  <Itens title={tasks.title} description={tasks.description} value={tasks.value} status={tasks.status} id={tasks.id} refreshData={refreshData} />
                )
              })
            }
          </ScrollView>
        </Animatable.View>
      </View>

    </SafeAreaView>
  )
};


const style = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: '#740be3'
  },

  title: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
  },

  ButtonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,

  },

  ButtonStyle: {
    backgroundColor: '#740be3',
    position: 'absolute',
    right: 15,
    top: 10,
    borderRadius: 30,
    height: 50,
    width: 50,
  },

  input: {
    backgroundColor: '#E3E3E3',
    height: 50,
    margin: 10,
    marginRight: 75,
    marginLeft: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

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