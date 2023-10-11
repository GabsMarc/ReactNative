import React, { Component, useState } from 'react';
import { 
    FlatList, 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Alert, 
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonIcon } from '../../components/Buttons';
import { Feather } from '@expo/vector-icons'
import Itens from '../../components/Itens';
import AddItem from '../../components/AddItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchInput from '../../components/SearchInput';




const  inicialState = {   
    showAddFinances: false,
    visibleFinances: [],
    finances: [],
    filtered: [],
    searchInput: '',
  }
  

  export default class Home extends Component {
    
    state = {
    ...inicialState
    
  }

  filterFinance = () => {
    let visibleFinances = null
    visibleFinances = [...this.state.finances] 
    this.setState({ visibleFinances })
    AsyncStorage.setItem('@App', JSON.stringify(this.state.finances))
  }


  
  toggleFinances = () =>{
    const finances = [...this.state.finances]
    this.setState({finances}, this.filterFinance)
  }



  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('@App') 
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
        desc: Finance.desc,
        value: Finance.value
      })

      this.setState({ finances, showAddFinances: false }, this.filterFinance)
  }

  

  deleteFinance = id => {
    const finances = this.state.finances.filter(finances => finances.id !== id)
    this.setState({ finances }, this.filterFinance)

  }
      














  searchQuery = (Input) => {
    var card = this.state.finances.filter(produto => produto.title);

    //  const finances = JSON.parse(data) || []
    //  this.setState({ finances }, this.filterFinance)
     
    if(Input != ''){
       var filter = card.filter(cards => cards.title.match(Input))     
       console.warn(filter)       
       
      //  AsyncStorage.setItem('@App', JSON.stringify(this.state.filtered))     
           
    }
  }

  



  render() {
    
    return (
      <SafeAreaView style={style.safeArea}>
        <AddItem 
              isVisible={this.state.showAddFinances}
              onCancel={() => this.setState({ showAddFinances: false })}
              onSave={this.addFinance}/>     
          <View style={[{ backgroundColor: '#740be3', height: 100}]}>
              <Text style={style.title}>
                Finance
              </Text>
          </View>
          <View style={[{flex: 8, backgroundColor: 'white'}]}>            
              <View style={{height: 70}}>                 
                  <SearchInput searchQuery={this.searchQuery} card={[this.state.finances.filter(card => card)]}/>
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
                      // data={this.state.filtered}
                      keyExtractor={item => `${item.id}`} 
                      renderItem={({item}) => <Itens {...item} 
                      // onToggleFinance={this.toggleFinances} 
                      onDelete={this.deleteFinance}
                      />}
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

  //  input: {
  //   backgroundColor: '#E3E3E3',
  //   height: 50,
  //   margin: 10,
  //   marginRight: 75,
  //   marginLeft: 15,
  //   borderRadius: 30,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  //  },

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