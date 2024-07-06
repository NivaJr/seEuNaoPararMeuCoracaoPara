import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, StatusBar, Modal, TouchableHighlight } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import HeaderTerciario from '../../../../../components/HeaderTerciario';
import Footer from '../../../../../components/Footer';
import { Colors } from '../../../../../constants/Colors';

export default function Tfm3_4_1() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <HeaderTerciario title='Treino Alfa' pai='saude/item/Saude6-1' />
      <ScrollView style={{ flex: 1 }}>
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
        <View style={styles.div}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>DEMONSTRAÇÃO</Text>
          <Video
            source={{ uri: "https://firebasestorage.googleapis.com/v0/b/videos-ccfex.appspot.com/o/01%20Abra%C3%A7ando%20as%20pernas.mov?alt=media&token=4bf08864-ddd0-4134-8467-e6474ad39897" }}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ height: 200 }}
          />
          <View 
            style={{borderTopWidth: 1.5, borderColor: 'gray', paddingTop: 10, 
                    marginTop: 10, display: "flex"}}
          >
            <View
              style={{ ...styles.titleBtn, width: '100%', alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              onTouchEnd={() => { setModalVisible(true)}}
            >
              <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1, color: 'black', flex: 1}}>EXERCÍCIO NR 1 teste para</Text>
              <Ionicons name="information-circle-outline" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer page='saude'/>
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
    backgroundColor: 'white',
    elevation: 1,
    margin: 15,
    padding: 15
  },
  video: {
    alignSelf: 'center',
    width: 280,
    height: 200,
  },
  bt: {
    alignSelf: 'center',
    borderBottomColor: 'white',
    height: 4,
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
    backgroundColor: Colors.VermelhoClaro,
    flexDirection: "column"
  },
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.Branco,
    backgroundColor: Colors.Branco,
  },
  header: {
    width: '100%',
    padding: 12,
    backgroundColor: Colors.VermelhoClaro,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    width: "20%",
    padding: 5,
    borderRadius: 10,
  },
  image2: {
    height: 60,
    width: 140,
    marginLeft: 18,
    position: 'relative',
    left: '150%',
    resizeMode: 'contain'
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center"
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
  titleBtn: {
    backgroundColor: '#F194FF',
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontFamily: 'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});