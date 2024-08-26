import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Modal, TouchableHighlight, Button, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import HeaderTerciario from '../../../../../components/HeaderTerciario';
import Footer from '../../../../../components/Footer';
import { Colors } from '../../../../../constants/Colors';
import { Link } from 'expo-router';

export default function Tfm3_4_1() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <HeaderTerciario title='Treino Charlie' pai='treinosEspeciais/item/TreinosEspeciais6-3' />
      <ScrollView style={{ flex: 1}}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ ...styles.modalText }}>ABDOMINAL SUPRA BRAÇO EXTENDIDO{"\n"}</Text>
                <ScrollView style={{alignSelf: 'flex-start'}}>
                  <Text style={styles.secondModalText}>TEMPO DE EXECUÇÃO:
                  </Text>
                  <Text>
                  {"\t"}20 repetições{"\n"}
                  </Text>
                  <Text style={styles.secondModalText}>CORRETA EXECUÇÃO:
                  </Text>
                  <Text>
                  {"\t"}Realizar a flexão do tronco com os braços esticados{"\n"}
                  </Text>
                  <Text style={styles.secondModalText}>OBSERVAÇÕES:
                  </Text>
                  <Text>
                  {"\t"}Soltar o ar na subida{"\n"}
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
          <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>BLOCO 3</Text>
          <Video
            source={{ uri: "https://firebasestorage.googleapis.com/v0/b/videos-ccfex.appspot.com/o/12%20%20Abdominal%20supra%20bra%C3%A7o%20extendido.mov?alt=media&token=75371593-b13f-4f40-8bf9-8f85e20a280b" }}
            resizeMode="contain"
            shouldPlay 
            isMuted={true}
            useNativeControls
            style={{ height: 200 }}
          />
          <View 
            style={{borderTopWidth: 1.5, borderColor: 'gray', paddingTop: 10, 
                    marginTop: 10, display: "flex", gap: 20}}
          >
            <View
              style={{ ...styles.titleBtn, width: '100%', alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              onTouchEnd={() => { setModalVisible(true)}}
            >
              <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1, color: 'black', flex: 1}}>
                ABDOMINAL SUPRA BRAÇO EXTENDIDO
              </Text>
              <Ionicons name="information-circle-outline" size={24} color="black" />
            </View>
            <View style={{ height: '20%',}}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: 'center', height: 70}}>
                <Link href={`pages/treinosEspeciais/item/treinoC/TreinosEspeciais6-3-14`} asChild>
                  <Pressable
                    style={{ ...styles.proxButton }}
                  >
                    <Text style={{ ...styles.proxTextStyle}}>Anterior</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer page='treinosEspeciais'/>
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
    textAlign: "center",
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 18
  },
  secondModalText: {
    fontWeight: 'bold',
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
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontFamily: 'BlackOpsOne_400Regular',
    textAlign: "center"
  },
  proxTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  proxButton:{
    backgroundColor: Colors.VerdeEscuro, 
    borderWidth: 1, 
    width: 110,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2
  },
});