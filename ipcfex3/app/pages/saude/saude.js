import { Text, ScrollView, View, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import Footer from '../../../components/Footer';





export default function Saude() {
  return (
    <ScrollView style={styles.contaiener}>
      <View style={styles.janela}>
        
        <TouchableOpacity onPress={()=>navigation.navigate('./item/Saude-1.js')} style={styles.botao}>
          <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
              <Text style={styles.topico}>
                Avaliação da Composição Corporal
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('./item/Saude-1.js')} style={styles.botao}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
              <Text style={styles.topico}>
                Identificação de Fatores de Risco de Síndrome Metabólica
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('./item/Saude-1.js')} style={styles.botao}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
              <Text style={styles.topico}>
                Verificação da Pressão Arterial
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('./item/Saude-1.js')} style={styles.botao}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
              <Text style={styles.topico}>
                Desenvolvimento de Diabete Melitus II
              </Text>
        </TouchableOpacity>
      </View>
      <Footer page="saude"/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contaiener: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: '#fafafa',
    backgroundColor: '#fafafa'
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
