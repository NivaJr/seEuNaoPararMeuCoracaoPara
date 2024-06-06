import React from 'react';
import { StyleSheet, Text, View, Button, Linking, StatusBar, ScrollView } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm3_4() {
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <HeaderTerciario title='Treinamento Rústico Operacional' pai='tfm/item/Tfm-3' />
          <ScrollView>
            <View style={styles.div}>
                <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10, color:'black'}}>TREINAMENTO RÚSTICO OPERACIONAL</Text>
                <Button
                  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=imejunior.crossebk&hl=pt_BR&gl=US')}
                  title="Baixar Cross-Operacional"
                  color={Colors.VerdeEscuro}
                  accessibilityLabel="Link para a loja"
                />
            </View>
          </ScrollView>
          <Footer page='tfm'/>
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
    fontWeight: "bold",
    textAlign: "center"
  }
});