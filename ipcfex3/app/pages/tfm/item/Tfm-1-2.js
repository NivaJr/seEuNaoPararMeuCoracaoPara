import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import LineLink from '../../../../components/LineLink';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm1_2({ navigation }) {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <HeaderTerciario title='Fase de Aquecimento em Movimento' pai='tfm/item/Tfm-1'/>
        <ScrollView style={{flex:1}}>
          <View style={styles.div}>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>FASE DE AQUECIMENTO EM MOVIMENTO</Text>
            <Text>
              Após a apresentação da tropa ao comandante, este ajustará 
              o dispositivo de acordo com seu efetivo e o espaço disponível e designará o guia da sessão de TFM. Em seguida, será dado o comando de 
              “CORRENDO CURTO!”, com o guia à frente do grupamento. Antes de 
              começar os exercícios, a tropa correrá de forma lenta de 2 a 3 minutos, 
              dependendo da temperatura ambiente.{'\n'}
            </Text>
            <Text>
              O guia segue à testa do grupamento, anuncia os exercícios 
              a serem realizados e, imediatamente, os executa. A distância entre os 
              militares deverá ser suficiente para possibilitar a execução correta do 
              movimento. A tropa repete os movimentos executados pelo guia, sem 
              contagem. Após cada exercício, a tropa, por imitação do guia, retornará à 
              corrida lenta antes de passar para o próximo.{'\n'}
            </Text>
            <LineLink title='Aquecimento Dinâmico' link='tfm/item/Tfm-1-2-1' icon='tfm'/>
          </View>
        <View style={{height:20}}></View>
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
    backgroundColor:'white',
    elevation: 1,
    margin:15,
    padding:15
  },
  container: {
    flex:1,
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
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row"
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
    backgroundColor:'rgba(0,0,0,0.5)'
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
    fontFamily:'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});