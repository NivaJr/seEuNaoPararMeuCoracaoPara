
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../../constants/Colors';
import Slider from '@react-native-community/slider';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm1_3() {
  const [FC, setFC] = useState(50);
  function aumentarFC(value){
    if(value<220){
      setFC(value => value + 1)
    }
  }
  function diminuirFC(value){
    if(value>0){
      setFC(value => value - 1)
    }
  }
  function Div2(){
    const [collapseVisible, setCollapseVisible] = useState(false);
      if(collapseVisible==false){
        return(
            <View
                  style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
                  onTouchEnd={() => {
                    setCollapseVisible(true);
                  }}
                >
                  <Text style={styles.textStyle}>MOSTRAR RESULTADO</Text>
                </View>
        );
      }else{
        return(
          <View>
            <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25, textAlign:'center', fontSize:22}}>FC = {FC*4} bpm</Text>
            <View
                  style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
                  onTouchEnd={() => {
                    setCollapseVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>OCULTAR RESULTADO</Text>
                </View>
          </View>
        );
      }
    }
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <HeaderTerciario title='Cálculo da Frequência Cardíaca de Esforço' pai='tfm/item/Tfm-2' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>CÁLCULO DA FREQUÊNCIA CARDÍACA DE ESFORÇO</Text>
                  <Text>Para se obter uma medida aproximada da FC de esforço em um dado minuto, é recomendado utilizar o tempo de 15s para contar o número de batimentos e multiplicar esse número por quatro.{'\n\n'}Exemplo: nº de batimentos em 15s = 36; FC = 36 x 4 = 144 bpm.
                  </Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Número de batimentos em 15s{'\n'}{'\n'}{FC}</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>diminuirFC(FC)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={0}
                      maximumValue={220}
                      value={FC}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => setFC(value)}
                      step={1}
                    />
                    <AntDesign onPress={()=>aumentarFC(FC)} name="plus" size={25} color="black" />
                  </View>
                  {
                    Div2()
                  }
                  </View>
              <View style={{height:180}}></View>
            </ScrollView>
            <Footer page='tfm' />
        </View>
    ); 
}

const styles = StyleSheet.create({
  div: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    margin:15,
    backgroundColor:'white',
    padding:15
  },
  container: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: Colors.Branco,
    backgroundColor : Colors.Branco,
  },
  header: {
    width:'100%',
    padding:12,
    backgroundColor: Colors.VerdeClaro,
    borderBottomWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    borderWidth:1,
    marginLeft:20,
    marginRight:20,
    width:"20%",
    padding:5,
    borderRadius:10,
  },
  image2: {
    height: 60,
    width:140,
    marginLeft:18,
    position:'relative',
    left:'150%',
    resizeMode: 'contain'
  },
  modalText: {
    marginBottom: 15,
    fontWeight:"bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    maxHeight: '70%',
    width:'100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily:'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});
