import { Text,  View, Image, Modal, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Footer from "../../../../components/Footer"
import LineLink from "../../../../components/LineLink"
import HeaderTerciario from '../../../../components/HeaderTerciario';




export default function treinosEspeciais1() {


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <HeaderTerciario title="Treino Veteranos" pai='treinosEspeciais'/>
      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineLink title='Treino Alfa' link="treinosEspeciais/item/TreinosEspeciais6-1" icon='treinosEspeciais'/>
          <LineLink title='Treino Bravo' link="treinosEspeciais/item/TreinosEspeciais6-2" icon='treinosEspeciais'/>
          <LineLink title='Treino Charlie' link="treinosEspeciais/item/TreinosEspeciais6-3" icon='treinosEspeciais'/>
        </View>
      </View>

      <Footer page="treinosEspeciais"/>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#f00435',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)', // semi-transparente para dar efeito de borrão
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'green',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: '12%',
  },
  middle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  middleContent: {
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    width: '94%',
    marginTop: '4%',
    borderRadius: 2,
  },
  textHeader: {
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 30,
    color: 'white',
  },
  viewTextHeader: {
    backgroundColor: 'black',
  },
  imageHeader: {
    height: 100,
    backgroundColor: 'white'
  },
  viewImageHeader: {
    backgroundColor: 'purple',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 30,
    justifyContent: "start",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxHeight: '60%',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'start',
  },
  tittle: {
    fontWeight: "bold",
    marginBottom: 15,
  },

  btn: {
    color: "red",
    width: 100,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  modalview2: {
    alignItems: "center",
  }
})