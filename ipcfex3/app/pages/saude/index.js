import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../components/Footer';
import HeaderSecundario from '../../../components/HeaderSecundario';
import LineLink from '../../../components/LineLink';


export default function Saude() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <HeaderSecundario title='SAUDE'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineLink title='Treino Veteranos' link='saude/item/Saude-6' icon='saude'/>
          <LineLink title='Avaliação da Composição Corporal' link='saude/item/Saude-1' icon='saude'/>
          <LineLink title='Identificação de Fatores de Risco de Síndrome Metabólica' link='saude/item/Saude-7' icon='saude'/>
          <LineLink title='Verificação de Pressão Arterial' link='saude/item/Saude-3' icon='saude'/>
          <LineLink title='Desenvolvimento de Diabete Melitus II' link='saude/item/Saude-4' icon='saude'/>
        </View>
      </View>

      <Footer page="saude"/>

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
