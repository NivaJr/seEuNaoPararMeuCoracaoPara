import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Modal, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import LineModal from '../../../../components/LineModal';
import LineLink from '../../../../components/LineLink';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Tfm3({ }) {
  const [modalVisible, setModalVisible] = useState(false);
        return (
          <View style={styles.container}>
            <StatusBar hidden={true}/>
            <HeaderTerciario title='Controle de Carga do Exercício Aeróbio' pai='tfm'/>
            <ScrollView >
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ScrollView>
                      <Text style={{...styles.modalText}}>SOBRE{"\n"}</Text>
                      <Text>Treinamento da Aptidão Cardiorrespiratória (ACR) é o conjunto de exercícios físicos planejados, estruturados, repetitivos e controlados, que tem por objetivo o desenvolvimento ou a manutenção da referida aptidão. Os métodos de treinamento da ACR previstos nos programas anuais de TFM são a corrida contínua, o treinamento intervalado de alta intensidade (TIAI) e o cross operacional.</Text>
                      </ScrollView>

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
              <View style={styles.middle}>
                <View style={styles.middleContent}>
                  <LineModal title='Sobre' icon='tfm' setModalVisible={setModalVisible} />
                  <LineLink title='Corrida Contínua' link='Tfm-3-2' icon='tfm'/>
                  <LineLink title='Treinamento Intervalado 400M' link='Tfm-3-3' icon='tfm'/>
                  <LineLink title='Treinamento Rústico Operacional' link='Tfm-3-4' icon='tfm'/>
                </View>
              </View>
              </ScrollView>
              <Footer page='tfm' /> 
            </View>
      ); 
}

const styles = StyleSheet.create({
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
  textStyle: {
    color: "white",
    fontFamily: "BlackOpsOne_400Regular",
    textAlign: "center"
  },
  middle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,  
  },
  middleContent: {
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    width: '94%',
    marginTop: '4%',
    borderRadius: 2,
  },
});