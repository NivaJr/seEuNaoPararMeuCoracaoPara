import React from 'react';
import { StyleSheet, Text, View, Button, Linking, StatusBar, ScrollView } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Tfm7() {
    return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <HeaderTerciario title='Teste de Avaliação Física' pai='tfm'/>
          <ScrollView>
            <View style={styles.div}>
                <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10, color:'black'}}>Diretriz para o Treinamento Físico Militar do Exército e sua Avaliação</Text>
                <Button
                  onPress={() => Linking.openURL('https://www.ipcfex.eb.mil.br/images/ipcfex_docs/Port_n_032-EME_de_31_Mar_08-TAF.pdf')}
                  title="Baixar Portaria"
                  color={Colors.VerdeEscuro}
                  accessibilityLabel="Link para a portaria de Treinamento Físico Militar do Exército"
                />
            </View>
          </ScrollView>
          <Footer page='tfm' />
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
    backgroundColor:'white',
    margin:25,
    padding:15
  },
  container: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: Colors.Branco,
    backgroundColor : Colors.Branco,
  },
  header: {
    width:'100%',
    padding:12,
    backgroundColor: Colors.VermelhoClaro,
    borderBottomWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    borderWidth:1,
    marginLeft:20,
    marginRight:20,
    width:"20%",
    padding:5,
    borderRadius:10,
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    height: '68%',
    width:'90%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});