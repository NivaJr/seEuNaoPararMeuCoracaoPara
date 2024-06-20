import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../components/Footer';
import HeaderSecundario from '../../../components/HeaderSecundario';
import LineSaude from '../../../components/LineSaude';


export default function Saude() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <HeaderSecundario title='SAUDE'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineSaude title = "Treino Veteranos" link="pages/saude/item/Saude-6"/>
          <LineSaude title='Avaliação da Composição Corporal' link="pages/saude/item/Saude-1"/>
          <LineSaude title='Identificação de Fatores de Risco de Síndrome Metabólica' link="pages/saude/item/Saude-5"/>
          <LineSaude title='Verificação de Pressão Arterial' link="pages/saude/item/Saude-3"/>
          <LineSaude title='Desenvolvimento de Diabete Melitus II' link="pages/saude/item/Saude-4"/>
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
