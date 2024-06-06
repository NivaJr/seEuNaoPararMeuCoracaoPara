import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../../constants/Colors';
import Slider from '@react-native-community/slider';
import b from './Tabela-2';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Tfm3_3() {
  const [FC, setFC] = useState(1600);
  function aumentarFC(value){
    if(value<3500){
      setFC(value => value + 100)
    }
  }
  function diminuirFC(value){
    if(value>1600){
      setFC(value => value - 100)
    }
  }
  function semana(){
    for(let i=0;i<b.length;i++){
      if(FC==b[i].teste){
        return(
          <View>
            {
              b[i].treino.map(function(val){
                return(
                  <View>
                    <Text style={{color:'black', borderColor:'gray', borderTopWidth:1.5, paddingTop:25, marginTop:25, textAlign:'center', fontSize:22}}>Semana {val.semana}</Text>
                    <Text style={{color:'black', borderColor:'gray', marginTop:25, textAlign:'center', fontSize:18}}>Tempo por volta: {b[i].tempovolta}{'\n'}N°Repetições: {val.repeticao}{'\n'}Intervalo: {val.intervalo}</Text>
                  </View>
                )
              })
            }
          </View>
        );
      }
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
            {
                semana()
            }
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
          <HeaderTerciario title='Treinamento Intervalado 400M' pai='tfm/item/Tfm-3' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>TREINAMENTO INTERVALADO DE ALTA INTENSIDADE 400M</Text>
                  <Text>O TIAI (do inglês HIIT – High Intensity Interval Training) é um método de treinamento da ACR que consiste de estímulos de corrida de intensidade forte, intercalados por intervalos de recuperação parcial, para evitar que o organismo ingresse em um quadro de fadiga. O TIAI tem como objetivo desenvolver as resistências aeróbica e anaeróbica.</Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Defina a distância alvo que queira no teste 12 min{'\n'}{'\n'}{FC} m</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>diminuirFC(FC)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={1600}
                      maximumValue={3500}
                      value={FC}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => setFC(value)}
                      step={100}
                    />
                    <AntDesign onPress={()=>aumentarFC(FC)} name="plus" size={25} color="black" />
                  </View>
                  {
                    Div2()
                  }
                  </View>
                  <View style={{height:70}}></View>
            </ScrollView>
            <Footer page='tfm'/>
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
  video: {
    alignSelf: 'center',
    width: 280,
    height: 200,
  },
  bt: {
    alignSelf:'center',
    borderBottomColor:'white',
    height:4,
    borderBottomWidth:1,
    width:"100%",
    padding:20,
    backgroundColor:Colors.VermelhoClaro,
    flexDirection:"column"
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
    backgroundColor: Colors.VermelhoClaro,
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
  openBtn: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 10,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily: "BlackOpsOne_400Regular",
    textAlign: "center"
  }
});