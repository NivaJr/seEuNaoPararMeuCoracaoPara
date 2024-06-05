import { Text, ScrollView, View, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import Footer from '../../../components/Footer';





export default function Tfm() {
  return (
    <View style={styles.contaiener}>
      <ScrollView style={styles.contaiener}>
        <View style={styles.janela}>
          <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Sessão de TFM
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Controle da Carga do Exercício Aeróbio
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Treinamento de Aptidão Cardiorespiratória
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Treinamento de Aptidão Muscular
                </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Treinamento Utilitário
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Sessão de Exercícios de Alongamento
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Programa Anual de TFM
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('./item/Tfm-1.js')} style={styles.botao}>
              <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
                <Text style={styles.topico}>
                  Teste de Avaliação Física
                </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer page="tfm"/>
    </View>
  );
}
const styles = StyleSheet.create({
  contaiener: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#f00435',
  },
  janela: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    margin:15,
    backgroundColor:'white',
  },
  botao:{
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row"
  },
  coracao:{
    position:'relative',
    top:3
  },
  topico:{
    fontSize:20,
    letterSpacing:1,
    color:'green',
    fontFamily:'BlackOpsOne_400Regular',
    position:'relative',
    left:10,
    top:5,
    flexDirection:'column',
    flex:1,
    marginRight:5
  }
})