import React from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"

import Mega from "./components/mega/Mega"
// import FlexboxV4 from "./components/layout/FlexboxV4"
// import FlexboxV3 from "./components/layout/FlexboxV3"
// import FlexboxV2 from "./components/layout/FlexboxV2"
// import FlexboxV1 from "./components/layout/FlexboxV1"
// import DigiteSeuNome from "./components/DigiteSeuNome"
// import ContadorV2 from "./components/contador/ContadorV2"
// import Pai from "./components/indireta/Pai"
// import Contador from "./components/Contador"
// import Botao from "./components/Botao"
// import Titulo from "./components/Titulo"
// import Aleatorio from "./components/Aleatorio"
// import MinMax from "./components/MinMax"
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'
 
export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7} />

        {/* <Titulo principal="Cadastro"
        <FlexboxV4/>
        <FlexboxV3/>
        <FlexboxV2/>
        <FlexboxV1/>
        <DigiteSeuNome />
        <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo={13}/>
        <Botao />
                secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />        */}
    </SafeAreaView> 
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    }
})