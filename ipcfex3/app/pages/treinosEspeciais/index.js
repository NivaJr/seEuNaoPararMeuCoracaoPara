import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../components/Footer';
import HeaderSecundario from '../../../components/HeaderSecundario';
import LineLink from '../../../components/LineLink';


export default function TreinosEspeciais() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <HeaderSecundario title='TREINOS ESPECIAIS'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineLink title='Treino Veteranos' link='treinosEspeciais/item/TreinosEspeciais-6' icon='treinosEspeciais'/>
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
  }
})
