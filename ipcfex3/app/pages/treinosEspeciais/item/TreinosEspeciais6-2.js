import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import EstiloComum from "../../EstiloComum";
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineLink from '../../../../components/LineLink';

export default function treinosEspeciais6_2() {
        return (
        <View style={styles.bc}>
          <StatusBar hidden={true} />
          <HeaderTerciario title="Treino Bravo" pai='treinosEspeciais/item/TreinosEspeciais-6'/>
          <ScrollView style={styles.container}>
              <View style={styles.div}>
                <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10, padding:15, fontSize:16}}>Treino Bravo</Text>
                <Text style={{padding:15}}>O treino Bravo é um método de treinamento de Circuito em blocos. Este consiste ao praticante realizar uma série de cada exercício dentro do bloco, com pequenos intervalos entre eles.{'\n'}
                O praticante avança para o próximo bloco, após três passagens dos exercícios de cada bloco.{'\n'}</Text>
                <View style={styles.subdiv}>
                  <View style={styles.subdivtitle}>
                    <Text style={styles.subdivtitletext}>Preparação</Text>
                  </View>
                  <View>
                    <LineLink title='Abraçando as Pernas' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-1" icon='treinosEspeciais'/>
                    <LineLink title='Mobilidade Quadril e Tronco' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-2" icon='treinosEspeciais'/>
                    <LineLink title='Polichinelos' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-3" icon='treinosEspeciais'/>
                  </View>
                </View>
                <View style={styles.subdiv}>
                  <View style={styles.subdivtitle}>
                    <Text style={styles.subdivtitletext}>Bloco 1</Text>
                  </View>
                  <View>
                    <LineLink title='Agachamento' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-4" icon='treinosEspeciais'/>
                    <LineLink title='Flexão de Braços' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-5" icon='treinosEspeciais'/>
                    <LineLink title='Afundo' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-6" icon='treinosEspeciais'/>
                    <LineLink title='Prancha Baixa' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-7" icon='treinosEspeciais'/>
                  </View>
                </View>
                <View style={styles.subdiv}>
                  <View style={styles.subdivtitle}>
                    <Text style={styles.subdivtitletext}>Bloco 2</Text>
                  </View>
                  <View>
                    <LineLink title='Abdominal Supra' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-8" icon='treinosEspeciais'/>
                    <LineLink title='Agachamento Sumô' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-9" icon='treinosEspeciais'/>
                    <LineLink title='Meio Sugado' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-10" icon='treinosEspeciais'/>
                    <LineLink title='Triceps Mergulho(Sofá[Perna Esticada])' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-11" icon='treinosEspeciais'/>
                  </View>
                </View>
                <View style={styles.subdiv}>
                  <View style={styles.subdivtitle}>
                    <Text style={styles.subdivtitletext}>Bloco 3</Text>
                  </View>
                  <View>
                    <LineLink title='Perdigueiro' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-12" icon='treinosEspeciais'/>
                    <LineLink title='Abdominal Infra' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-13" icon='treinosEspeciais'/>
                    <LineLink title='Elevação de quadril' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-14" icon='treinosEspeciais'/>
                    <LineLink title='Escalador Dinâmico' link="treinosEspeciais/item/treinoB/TreinosEspeciais6-2-15" icon='treinosEspeciais'/>
                  </View>
                </View>
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
  subdiv: {
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ddd',
  },
  subdivtitle: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 2,
    backgroundColor: 'rgba(55,66,194, 0.6)'
  },
  subdivtitletext: {
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 22,
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