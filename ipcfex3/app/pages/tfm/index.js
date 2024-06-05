import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../components/Footer';
import HeaderSecundario from '../../../components/HeaderSecundario';
import LineLink from '../../../components/LineLink';





export default function Saude() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <HeaderSecundario title='TFM'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineLink title='Sessão de TFM' link='Tfm-1' icon='tfm'/>
          <LineLink title='Controle da Carga do Exercício Aeróbio' link='Tfm-2'  icon='tfm'/>
          <LineLink title='Treinamento de Aptidão Cardiorespiratória' link='Tfm-3' icon='tfm'/>
          <LineLink title='Treinamento de Aptidão Muscular' link='Tfm-4' icon='tfm'/>
          <LineLink title='Treinamento Utilitário' link='Tfm-5' icon='tfm'/>
          <LineLink title='Sessão de Exercícios de Alongamento' link='Tfm-6' icon='tfm'/>
          <LineLink title='Programa Anual de TFM' link='Tfm-7' icon='tfm'/>
          <LineLink title='Teste de Avaliação Física' link='Tfm-8' icon='tfm'/>
        </View>
      </View>

      <Footer page="tfm"/>

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
