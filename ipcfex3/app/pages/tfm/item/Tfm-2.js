import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Modal, ScrollView, Button, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineModal from '../../../../components/LineModal';
import LineLink from '../../../../components/LineLink';

export default function Tfm2() {
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
                        <Text>Nesta parte o militar terá instruções de como realizar o controle da carga para o TF aeróbio.{'\n'}{'\n'}O monitoramento da intensidade do exercício aeróbico pode ser realizado de diversas formas, empregando-se variáveis fisiológicas muito precisas, encontradas por meio de testes laboratoriais (ex: consumo máximo de oxigênio, ponto de compensação respiratória, limiar ventilatório, entre outras), bem como por meio do uso de variáveis com grau menor de precisão, utilizadas comumente em ambientes extra laboratoriais (ex: frequência cardíaca – FC – de pico, FC de reserva, equivalente metabólico – MET, percepção subjetiva do esforço – PSE, entre outras).
                        </Text>
                        </ScrollView>

                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:90 }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={{...styles.textStyle, fontFamily:'BlackOpsOne_400Regular'}}>VOLTAR</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
                <View style={styles.middle}>
                  <View style={styles.middleContent}>
                    <LineModal title='Sobre' icon='tfm' setModalVisible={setModalVisible} />
                    <LineLink title='Locais para Medir a Pulsação' link='tfm/item/Tfm-2-2' icon='tfm'/>
                    <LineLink title='Cálculo da Frequência Cardíaca de Esforço' link='tfm/item/Tfm-2-3' icon='tfm'/>
                    <LineLink title='Cálculo da Frequência Cardíaca Máxima' link='tfm/item/Tfm-2-4' icon='tfm'/>
                    <LineLink title='Cálculo da Frequência Cardíaca de Reserva' link='tfm/item/Tfm-2-5' icon='tfm'/>
                    <LineLink title='Cálculo da Frequência Cardíaca de Repouso' link='tfm/item/Tfm-2-6' icon='tfm'/>
                  </View>
                </View>
              </ScrollView>
              <Footer page='tfm'/>
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
    fontSize:14,
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