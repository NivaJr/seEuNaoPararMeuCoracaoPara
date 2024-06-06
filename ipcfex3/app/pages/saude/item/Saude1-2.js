import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, StatusBar } from 'react-native';
import EstiloComum from "../../EstiloComum";
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Saude1_2() {
  console.disableYellowBox = true;
  const [massa,setMassa]=useState(0);
  const [estatura,setEstatura]=useState(1);
  const [risco,setRisco]=useState('Nada');
    function Calc(n,k){
      let iMC=0;
      if(k==1){
        setMassa(n);
        iMC=n/(estatura*estatura)
      }else if(k==2){
        setEstatura(n);
        iMC=massa/(n*n)
      }
      if(iMC<18.5){
        setRisco('Abaixo do Peso')
      }else if(iMC<24.9 && iMC>=18.5){
        setRisco('Normal')
      }else if(iMC<29.9 && iMC>=24.9){
        setRisco('Sobrepeso')
      }else if(iMC<34.9 && iMC>=29.9){
        setRisco('Obeso I')
      }else if(iMC<39.9 && iMC>=34.9){
        setRisco('Obeso II')
      }else if(iMC>=39.9){
        setRisco('Obeso III')
      }
    }
    function Div1(){
      const [collapseVisible, setCollapseVisible] = useState(false);
        if(collapseVisible==false){
          return(
              <View
                    style={{ ...styles.openButton, backgroundColor: EstiloComum.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
                    onTouchEnd={() => {
                      setCollapseVisible(true);
                    }}
                  >
                    <Text style={styles.textStyle}>MOSTRAR RESULTADO</Text>
                  </View>
          );
        }else{
          return(
            <View>
              <StatusBar hidden={true} />
              <View style={{flexDirection: 'row', width:'100%', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25, justifyContent:'center'}}>
                <Text style={{color:'black', fontSize:22}}>IMC = {((massa/(estatura*estatura))).toFixed(1)} kg/m</Text><Text style={{color:'black', fontSize:16, lineHeight: 18}}>2</Text>
              </View>
              <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Classificação</Text>
              <Text style={{color:'black', fontSize:22, textAlign:'center'}}>{risco}</Text>
              <View
                    style={{ ...styles.openButton, backgroundColor: EstiloComum.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
                    onTouchEnd={() => {
                      setCollapseVisible(false);
                    }}
                  >
                    <Text style={styles.textStyle}>OCULTAR RESULTADO</Text>
                  </View>
            </View>
          );
        }
      }
          return (
            <View style={styles.container}>
              <HeaderTerciario title="IMC" link="pages/saude/item/Saude-1"/>
              <StatusBar hidden={true} />
              <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>IMC</Text>
                  <Text>O IMC, também chamado de índice de Quetelet, é a sigla usada para avaliar a massa corporal em relação à estatura de um indivíduo. É calculado dividindo-se essa massa, em quilogramas, pela estatura ao quadrado, em metros.
                  </Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Massa Corporal (kg){'\n'}{'\n'}{massa} kg</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua Massa: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc(parseFloat(text),1)}
                        placeholder="massa"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18, flex:1}}>{'\n'}Estatura (m){'\n'}{'\n'}{estatura} m</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua Estatura: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc(parseFloat(text),2)}
                        placeholder="estatura"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  {
                    Div1()
                  }
                  </View>
              <View style={{height:100}}></View>
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
    backgroundColor:'white',
    elevation: 1,
    margin:15,
    padding:15
  },
  bt: {
    alignSelf:'center',
    borderBottomColor:'white',
    height:'12.7%',
    borderBottomWidth:1,
    width:"100%",
    padding:20,
    backgroundColor:EstiloComum.VermelhoClaro,
    flexDirection:"column"
  },
  container: {
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft:4
  },
  textStyle: {
    color: "white",
    fontFamily:'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});