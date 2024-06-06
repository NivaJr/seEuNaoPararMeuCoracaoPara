import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView,Modal, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineModal from '../../../../components/LineModal';
import LineLink from '../../../../components/LineLink';

export default function Tfm3({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
        return (
          <View style={styles.container}>
            <StatusBar hidden={true}/>
            <HeaderTerciario title='Treinamento de Aptidão Muscular' pai='tfm'/>
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
                      <Text>A aptidão muscular é um dos componentes da aptidão física, sendo dividida em força, resistência e potência muscular. Força muscular é a capacidade do músculo exercer uma tarefa com poucas repetições antes da fadiga muscular momentânea (1 a 12 repetições), resistência muscular é a capacidade do músculo realizar esforços sucessivos com muitas repetições (acima de 12 repetições) e potência muscular é a capacidade do músculo exercer força por unidade de tempo.{'\n'}</Text>
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
                  <LineLink title='Ginástica Básica' link='Tfm-4-2' icon='tfm'/>
                  <LineLink title='Treinamento em Circuito' link='Tfm-4-3' icon='tfm'/>
                  <LineLink title='Circuito de Pentágonos' link='Tfm-4-4' icon='tfm'/>
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