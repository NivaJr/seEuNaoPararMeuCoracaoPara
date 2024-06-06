import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import Figura1 from '../../../../assets/images/figura1.png';
import Figura2 from '../../../../assets/images/figura2.png';
import Figura3 from '../../../../assets/images/figura3.png';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm1_2() {
  function Div1(){
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    const [collapseVisible, setCollapseVisible] = useState(false);
    function Conteudo(){
      if(conteudo==1){
        return(
          <View>
      <Image style={{alignSelf:'center'}} source={Figura1}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig1: Palpação do pulso radial</Text>
    </View>
        );
      }else if(conteudo==2){
        return(
          <View>
      <Image style={{alignSelf:'center'}} source={Figura2}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig2: Palpação do pulso apical</Text>
    </View>
        );
      }else if(conteudo==3){
        return(
          <View>
      <Image style={{alignSelf:'center'}} source={Figura3}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig3: Palpação do pulso temporal</Text>
    </View>
        );
      }
    }
    if(collapseVisible==false){
      return(
          <View
                style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:120, alignSelf:'center' }}
                onTouchEnd={() => {
                  setCollapseVisible(true);
                }}
              >
                <Text style={styles.textStyle}>EXIBIR MAIS</Text>
              </View>
      );
    }else{
      return(
        <View>
          <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    {
                      Conteudo()
                    }
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:90 }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>VOLTAR</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
          <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25}}>As Figuras 1 a 3 indicam locais do corpo onde se pode medir a pulsação. Devem ser utilizados os dedos indicador e médio para identificar a pulsação e não se deve fazer pressão exagerada para não afetar a medida.</Text>
          <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(1);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FIGURA 1</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(2);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FIGURA 2</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(3);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FIGURA 3</Text>
              </View>
              <View style={{height:20}}></View>
          <View
                style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:135, alignSelf:'center' }}
                onTouchEnd={() => {
                  setCollapseVisible(false);
                }}
              >
                <Text style={styles.textStyle}>EXIBIR MENOS</Text>
              </View>
        </View>
      );
    }
  }
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <HeaderTerciario title='Locais para Medir a Pulsação' pai='tfm/item/Tfm-2' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>LOCAIS PARA MEDIR A PULSAÇÃO</Text>
                  <Text>Cada indivíduo tem mais facilidade de aferir sua pulsação em determinado local. Cabe ressaltar, entretanto, que, embora o pulso da artéria carótida possa ser sentido facilmente, não é recomendado que esse local seja palpado durante uma sessão de exercícios.</Text>
                  {
                    Div1()
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
    backgroundColor:'white',
    elevation: 1,
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