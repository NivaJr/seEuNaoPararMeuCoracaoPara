import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import EstiloComum from "../../../EstiloComum";

export default function Tfm3_4_1() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <HeaderTerciario title='Sentando nos Calcanhares' pai='pages/saude/item/Saude6-1' />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.div}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>INTRODUÇÃO</Text>
          <Video
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tfm-sa.appspot.com/o/video2.mp4?alt=media&token=7d63787c-59f1-4853-895c-16af40f0c3fe' }}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ height: 200 }}
          />
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
    backgroundColor: EstiloComum.VermelhoClaro,
    flexDirection: "column"
  },
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: EstiloComum.Branco,
    backgroundColor: EstiloComum.Branco,
  },
  header: {
    width: '100%',
    padding: 12,
    backgroundColor: EstiloComum.VermelhoClaro,
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
  openBtn: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily: 'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});