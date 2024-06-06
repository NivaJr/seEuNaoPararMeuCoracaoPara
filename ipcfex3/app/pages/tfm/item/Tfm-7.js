import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView,Modal, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';
import LineModal from '../../../../components/LineModal';
import LineLink from '../../../../components/LineLink';

export default function Tfm7({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
        return (
          <View style={styles.container}>
            <StatusBar hidden={true}/>
            <HeaderTerciario title='Programa Anual de TFM' pai='tfm'/>
            <ScrollView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ScrollView>
                      <Text style={{...styles.modalText}}>SOBRE{"\n"}</Text>
                      <Text>Os programas de TFM são esquemas simplificados que orientam o planejamento do TFM ao longo do ano de instrução. Cada programa contém o planejamento da distribuição dos métodos de treinamento previstos para todas as semanas do ano. Baseado nos programas de TFM, o S/3, assessorado pelo OTFM e considerando as instalações e o material existente na OM para a prática das atividades físicas, planejará a distribuição das sessões destinadas ao TFM em cada semana.{'\n'}</Text>
                <Text>Na confecção do QTS, o S/3 pode alterar a ordem das atividades semanais existentes nos programas anuais de TFM. Pode inverter tanto a ordem das sessões como a sequência das atividades contidas em uma mesma sessão, caso esta seja mista.{'\n'}</Text>
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
                  <LineLink title='4 Sessões' link='Tfm-7-2' icon='tfm'/>
                  <LineLink title='5 Sessões' link='Tfm-7-3' icon='tfm'/>
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