import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import EstiloComum from "../../EstiloComum";
import LineSaude from '../../../../components/LineSaude';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function saude6_1() {
        return (
        <View style={styles.bc}>
          <StatusBar hidden={true} />
          <HeaderTerciario title="Treino Alfa" pai='saude/item/Saude-6'/>
          <ScrollView style={styles.container}>
              <View style={styles.div}>
                <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10, padding:15}}>Treino Alfa</Text>
                <Text style={{padding:15}}>O treinamento do Circuito Alfa poderá ser realizado em qualquer área plana. Por ser uma atividade complementar, o uniforme utilizado será o mesmo da atividade principal que está sendo executada.{'\n'}</Text>
                <LineSaude title='Abraçando as Pernas' link="pages/saude/item/treinoA/Saude6-1-1"/>
                <LineSaude title='Sentando nos Calcanhares' link="pages/saude/item/treinoA/Saude6-1-2"/>
                <LineSaude title='Circundação dos Braços' link="pages/saude/item/treinoA/Saude6-1-4"/>
                <LineSaude title='Deslizamento de braços na parede' link="pages/saude/item/treinoA/Saude6-1-5"/>
                <LineSaude title='Agachamento (Sofá)' link="pages/saude/item/treinoA/Saude6-1-6"/>
                <LineSaude title='Flexão de Braços (Sofá)' link="pages/saude/item/treinoA/Saude6-1-7"/>
                <LineSaude title='Corrida Estacionária' link="pages/saude/item/treinoA/Saude6-1-8"/>
                <LineSaude title='Prancha Baixa' link="pages/saude/item/treinoA/Saude6-1-9"/>
                <LineSaude title='Burppe' link="pages/saude/item/treinoA/Saude6-1-11"/>
                <LineSaude title='Abdominal Supra' link="pages/saude/item/treinoA/Saude6-1-12"/>
                <LineSaude title='Triceps Mergulho' link="pages/saude/item/treinoA/Saude6-1-13"/>
                <LineSaude title='Elevação do Quadril' link="pages/saude/item/treinoA/Saude6-1-14"/>
                <LineSaude title='Agachamento Isométrico' link="pages/saude/item/treinoA/Saude6-1-14"/>
                <LineSaude title='Escalador ' link="pages/saude/item/treinoA/Saude6-1-14"/>

              </View>
            </ScrollView>
            <Footer page="saude"/>
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