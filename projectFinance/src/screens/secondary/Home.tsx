import React, { Component } from 'react';
import { 
    FlatList, 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonIcon } from '../../components/Buttons';
import { Feather } from '@expo/vector-icons'
import Itens from '../../components/Itens';
import AddItem from '../../components/AddItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const  inicialState = {   
    showAddFinances: false,
    visibleFinances: [],
    finances: []
}
export default class Home extends Component {
  
  state = {
    ...inicialState
    
  }

  // getFinance = async () => {
  //   const stateString = await AsyncStorage.getItem('finances')
  //   const state = JSON.parse(stateString) || inicialState
  //   this.setState(state, this.filterFinance)
  // }

  filterFinance = () => {
    let visibleFinances = null
    visibleFinances = [...this.state.finances] 
    this.setState({ visibleFinances })
    AsyncStorage.setItem('finances', JSON.stringify(this.state.finances))
  }


  
  toggleFinances = () =>{
    const finances = [...this.state.finances]
    this.setState({finances}, this.filterFinance)
  }



  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('finances') 
    const finances = JSON.parse(data) || []
    this.setState({ finances }, this.filterFinance)
    
  }



  addFinance = Finance => {
      if(!Finance.title || !Finance.title.trim()) {
          Alert.alert('Título não informada!')
          return
      } else if(!Finance.desc || !Finance.desc.trim()) {
        Alert.alert('Descrição não informada!')
        return
      }

      const finances = [...this.state.finances]
      finances.push({
        id: Math.random(),
        title: Finance.title,
        desc: Finance.desc
      })

      this.setState({ finances, showAddFinances: false }, this.filterFinance)
  }

  

  deleteFinance = id => {
    const finances = this.state.finances.filter(finances => finances.id !== id)
    this.setState({ finances }, this.filterFinance)
  }

  render() {
    return (
      <SafeAreaView style={style.safeArea}>
        <AddItem isVisible={this.state.showAddFinances}
              onCancel={() => this.setState({ showAddFinances: false })}
              onSave={this.addFinance}/>
          <View style={[{ backgroundColor: '#740be3', height: 100}]}>
              <Text style={style.title}>
                Finance
              </Text>
          </View>
          <View style={[{flex: 8, backgroundColor: 'white'}]}>            
              <View style={{height: 70}}>
                  <View style={style.input}>
                      <Feather name='search' size={30} color={'#740be3'} style={{flex: 1, paddingLeft: 15, alignSelf: 'center'}}/>
                      <TextInput style={{flex: 7, fontSize: 17}}
                        placeholder='Pesquisar bloco'/>
                  </View>
                  <View style={style.ButtonStyle}>
                      <ButtonIcon 
                          image={require('../../../assets/botao-adicionar-white.png')} 
                          height={50} 
                          width={50}
                          onPress={() => this.setState({ showAddFinances: true })}
                      />
                  </View>       
              </View>
              <View style={{flex: 1, }}>               
                  <FlatList
                      data={this.state.finances}
                      keyExtractor={item => `${item.id}`} 
                      renderItem={({item}) => <Itens {...item} 
                      onToggleFinance={this.toggleFinances} 
                      onDelete={this.deleteFinance}/>}
                  />
              </View>
          </View>

      </SafeAreaView>
    )
  };
}

const style = StyleSheet.create ({
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