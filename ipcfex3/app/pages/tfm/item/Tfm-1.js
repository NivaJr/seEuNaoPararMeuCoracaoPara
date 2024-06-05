import { Modal, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import HeaderTerciario from "../../../../components/HeaderTerciario";
import Footer from "../../../../components/Footer";
import LineLink from "../../../../components/LineLink";
import { Colors } from "../../../../constants/Colors";
import { useState } from "react";
import LineModal from "../../../../components/LineModal";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
      <HeaderTerciario title='Sessão de TFM'/>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView>
                <Text style={{ ...styles.modalText }}>SOBRE{"\n"}</Text>
                <Text>A sessão de treinamento físico militar caracteriza-se pelo período durante o qual o militar realiza um conjunto de atividades físicas, incluindo o aquecimento, a atividade principal e a volta à calma, visando à melhoria da saúde e ao desenvolvimento da condição física.{"\n"}
                </Text>
                <Text>A duração de uma sessão de TFM é de dois tempos de instrução ou 90 minutos.
                  A frequência ideal do TFM é de cinco sessões semanais, previstas em horário de instrução. A frequência mínima deve ser de quatro sessões semanais.{"\n"}
                </Text>
                <Text>Uma sessão completa de TFM compõe-se de três fases: aquecimento, trabalho principal e volta à calma.{"\n"}
                </Text>
              </ScrollView>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: 90 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ ...styles.textStyle, fontFamily: 'BlackOpsOne_400Regular' }}>VOLTAR</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View style={styles.middle}>
          <View style={styles.middleContent}>
            <LineModal title='Sobre' link='Tfm-1' icon='tfm' setModalVisible={setModalVisible} />
            <LineLink title='Fase de Aquecimento em Movimento' link='Tfm-1-2' icon='tfm'/>
            <LineLink title='Fase de Aquecimento Estático' link='Tfm-1-3' icon='tfm'/>
            <LineLink title='Fase de Trabalho Principal' link='Tfm-1-4' icon='tfm'/>
            <LineLink title='Fase de Volta à Calma' link='Tfm-1-5' icon='tfm'/>
          </View>
        </View>
      </ScrollView>

      <Footer page="tfm"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.backgroundColor,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    maxHeight: '70%',
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  }
})