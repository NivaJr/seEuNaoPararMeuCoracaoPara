import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import LineLink from '../../../../components/LineLink';

export default function Tfm4_4({ navigation }) {
        return (
          <View style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderTerciario title='Circuito de Pentágonos' pai='tfm/item/Tfm-4' />
            <ScrollView >
            <View style={styles.middle}>
              <View style={styles.middleContent}>
                <LineLink title='Introdução'  link='tfm/item/Tfm-4-4-1' icon='tfm'/>
                <LineLink title='Pentágono A' link='tfm/item/Tfm-4-4-2' icon='tfm'/>
                <LineLink title='Pentágono B' link='tfm/item/Tfm-4-4-3' icon='tfm'/>
                <LineLink title='Pentágono C' link='tfm/item/Tfm-4-4-4' icon='tfm'/>
                <LineLink title='Pentágono D' link='tfm/item/Tfm-4-4-5' icon='tfm'/>
              </View>
            </View>
            </ScrollView>
            <Footer page='tfm' /> 
          </View>
      );
}

const styles = StyleSheet.create({
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
  },
  middle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,  
  },
  middleContent: {
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    width: '94%',
    marginTop: '4%',
    borderRadius: 2,
  },
});