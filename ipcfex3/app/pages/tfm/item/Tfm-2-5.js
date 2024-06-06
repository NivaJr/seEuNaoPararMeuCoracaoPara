import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../../constants/Colors';
import Slider from '@react-native-community/slider';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm2_5() {
  const [f, setF] = useState(20);
  const [FCmax, setFCmax] = useState(20);
  const [FCR, setFCR] = useState(30);
  function aumentarFCmax(value){
    if(value<100){
      setFCmax(value => value + 1)
    }
  }
  function diminuirFCmax(value){
    if(value>0){
      setFCmax(value => value - 1)
    }
  }
  function aumentarFCR(value){
    if(value<220){
      setFCR(value => value + 1)
    }
  }
  function diminuirFCR(value){
    if(value>0){
      setFCR(value => value - 1)
    }
  }
  function Div4(){
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
          <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25, textAlign:'center', fontSize:22}}>FCR = {(f-FCR).toFixed(1)} bpm</Text>
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
          <HeaderTerciario title='Cálculo da Frequência Cardíaca de Reserva' pai='tfm/item/Tfm-2'/>
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>CÁLCULO DA FREQUÊNCIA CARDÍACA DE RESERVA</Text>
                  <Text>FCR (frequência cardíaca de reserva) = FCMáx – FCRep</Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Idade{'\n'}{'\n'}{FCmax}</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>{diminuirFCmax(FCmax);setF(220-FCmax);}} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={0}
                      maximumValue={100}
                      value={FCmax}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => {setFCmax(value);setF(220-FCmax);}}
                      step={1}
                    />
                    <AntDesign onPress={()=>{aumentarFCmax(FCmax);setF(220-FCmax);}} name="plus" size={25} color="black" />
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}FCRep{'\n'}{'\n'}{FCR} bpm</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>diminuirFCR(FCR)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={0}
                      maximumValue={220}
                      value={FCR}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => setFCR(value)}
                      step={1}
                    />
                    <AntDesign onPress={()=>aumentarFCR(FCR)} name="plus" size={25} color="black" />
                  </View>
                  {
                    Div4()
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
    backgroundColor:'white',
    margin:15,
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