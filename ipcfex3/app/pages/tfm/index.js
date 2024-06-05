import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../components/Footer';
import HeaderSecundario from '../../../components/HeaderSecundario';
import LineTfm from '../../../components/LineTfm';





export default function Saude() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <HeaderSecundario title='TFM'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineTfm title='Sessão de TFM'/>
          <LineTfm title='Controle da Carga do Exercício Aeróbio'/>
          <LineTfm title='Treinamento de Aptidão Cardiorespiratória'/>
          <LineTfm title='Treinamento de Aptidão Muscular'/>
          <LineTfm title='Treinamento Utilitário'/>
          <LineTfm title='Sessão de Exercícios de Alongamento'/>
          <LineTfm title='Programa Anual de TFM'/>
          <LineTfm title='Teste de Avaliação Física'/>
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
