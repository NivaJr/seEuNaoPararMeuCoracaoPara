import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import EstiloComum from "../../EstiloComum";
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineLink from '../../../../components/LineLink';

export default function treinosEspeciais6_1() {
        return (
        <View style={styles.bc}>
          <StatusBar hidden={true} />
          <HeaderTerciario title="Treino Alfa" pai='treinosEspeciais/item/TreinosEspeciais-6'/>
          <ScrollView style={styles.container}>
              <View style={styles.div}>
                <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10, padding:15}}>Treino Alfa</Text>
                <Text style={{padding:15}}>O treino Alfa é um método de treinamento em Circuito. Esse método consiste em realizar uma série de cada exercício com pequenos intervalos entre elas. Ao final do circuito, no último exercício, o intervalo é maior, período de recuperação, sendo sugerido a repetição do circuito, com limite de três passagens.{'\n'}</Text>
                <LineLink title='Abraçando as Pernas' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-1" icon='treinosEspeciais'/>
                <LineLink title='Sentando nos Calcanhares' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-2" icon='treinosEspeciais'/>
                <LineLink title='Circundação dos Braços' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-3" icon='treinosEspeciais'/>
                <LineLink title='Deslizamento de braços na parede' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-4" icon='treinosEspeciais'/>
                <LineLink title='Agachamento (Sofá)' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-5" icon='treinosEspeciais'/>
                <LineLink title='Flexão de Braços (Sofá)' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-6" icon='treinosEspeciais'/>
                <LineLink title='Corrida Estacionária' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-7" icon='treinosEspeciais'/>
                <LineLink title='Prancha Baixa' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-8" icon='treinosEspeciais'/>
                <LineLink title='Burppe' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-9" icon='treinosEspeciais'/>
                <LineLink title='Abdominal Supra' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-10" icon='treinosEspeciais'/>
                <LineLink title='Triceps Mergulho' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-11" icon='treinosEspeciais'/>
                <LineLink title='Elevação do Quadril' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-12" icon='treinosEspeciais'/>
                <LineLink title='Agachamento Isométrico' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-13" icon='treinosEspeciais'/>
                <LineLink title='Escalador' link="treinosEspeciais/item/treinoA/TreinosEspeciais6-1-14" icon='treinosEspeciais'/>

              </View>
            </ScrollView>
            <Footer page="treinosEspeciais"/>
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
    elevation: 1,
    margin:15,
    backgroundColor:'white',
  },
  container: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: EstiloComum.Branco,
    backgroundColor : EstiloComum.Branco,
  },
  bc: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: EstiloComum.Branco,
    backgroundColor : EstiloComum.Branco,
  },
  header: {
    width:'100%',
    padding:12,
    backgroundColor: EstiloComum.VermelhoClaro,
    borderBottomWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bt: {
    alignSelf:'center',
    borderBottomColor:'white',
    height:'12.7%',
    borderBottomWidth:1,
    width:"100%",
    padding:"1%",
    backgroundColor:EstiloComum.VermelhoClaro,
    flexDirection:"column"
  },
  btn: {
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row"
  },
  image2: {
    height: 60,
    width:140,
    marginLeft:18,
    position:'relative',
    left:'150%',
    resizeMode: 'contain'
  },
  modalText: {
    marginBottom: 15,
    fontWeight:"bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    maxHeight: '70%',
    width:'100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily: "BlackOpsOne_400Regular",
    textAlign: "center"
  }
});