import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Modal, ScrollView, Button, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineModal from '../../../../components/LineModal';
import LineLink from '../../../../components/LineLink';

export default function Tfm6({}) {
  const [modalVisible, setModalVisible] = useState(false);
          return (
            <View style={styles.container}>
              <StatusBar hidden={true}/>
              <HeaderTerciario title='Sessão de Exercícios de Alongamento' pai='tfm'/>
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
                        <Text>Exercícios de alongamento muscular, visando o aumento da amplitude de movimento (ADM) articular, trazem benefícios importantes ao sistema mioarticular. Em linhas gerais, favorecem a realização de atividades físicas e funcionais, reduzindo as dores, desconfortos e o risco de lesões musculoesqueléticas, uma vez que o encurtamento dos tecidos moles (musculares e colagenosos), que cruzam a articulação, aumenta a chance de se romperem ou rasgarem, caso a articulação seja forçada além da sua ADM normal.{"\n"}{"\n"}{"\n"}PARÂMETROS PARA EXECUÇÃO{"\n"}{"\n"}{"\n"}
  a) Realizar séries de 3 repetições, para cada grupo muscular alongado, 
  mantendo a posição de alongamento por 30 segundos;{"\n"}{"\n"}
  b) Alcançar e manter a posição de alongamento muscular, até a sensação 
  de leve desconforto, sem necessidade de gerar estímulo doloroso;{"\n"}{"\n"}
  c) Realizar o alongamento com o estiramento em torque constante (mantendo-se a mesma tensão ao longo do tempo) ou em ângulo constante (mantendo-se determinada ADM durante o tempo de execução). 
  Adaptar a ADM após cada repetição do alongamento.{"\n"}{"\n"}
  d) Manter a continuidade dos exercícios com frequência mínima de 2 
  vezes por semana, podendo realizar o treinamento por até 5 vezes na 
  semana.{"\n"}{"\n"}{"\n"}
  O alongamento estático pode ser realizado de duas maneiras: 
  mantendo um torque (tensão) constante ao longo do tempo de execução 
  (alongamento em torque constante); ou uma determinada amplitude de 
  movimento por um determinado tempo (alongamento em ângulo constante), 
  em que também são constatadas diminuição na rigidez do músculo e tendão.
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
                    <LineLink title='Alongamento de Membros Superiores' link='tfm/item/Tfm-6-2' icon='tfm'/>
                    <LineLink title='Alongamento de Membros Inferiores' link='tfm/item/Tfm-6-3' icon='tfm'/>
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