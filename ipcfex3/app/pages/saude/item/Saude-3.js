import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, StatusBar } from 'react-native';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Saude3() {
      const [pAS, setPAS]=useState(0);
      const [pAD, setPAD]=useState(0);
      const [risco, setRisco]=useState('Nada');
      const [riscoo, setRiscoo]=useState('Nada');
      function Risco(){
        return(
          <View style={{borderTopWidth:1.5, borderColor:'gray', marginTop:25, marginBottom:15}}>
            <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Classificação da PAS</Text>
            <Text style={{color:'black', fontSize:22, textAlign:'center'}}>{risco}</Text>
            <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Classificação da PAD</Text>
            <Text style={{color:'black', fontSize:22, textAlign:'center'}}>{riscoo}</Text>
          </View>
        );
      }
      function Calc(n,k){
        let pas=0,pad=0;
        if(k==1){
          setPAS(n);
          pas=n;
          if(pas<121){
            setRisco('Normal');
          }else if(pas>=121 && pas<140){
            setRisco('Pré-hipertensão');
          }else if(pas>=140 && pas<160){
            setRisco('Hipertensão estágio 1');
          }else if(pas>=160 && pas<180){
            setRisco('Hipertensão estágio 2');
          }else if(pas>=180){
            setRisco('Hipertensão estágio 3');
          }
        }else if(k==2){
          setPAD(n);
          pad=n;
          if(pad<81){
            setRiscoo('Normal');
          }else if(pad>=81 && pad<90){
            setRiscoo('Pré-hipertensão');
          }else if(pad>=90 && pad<100){
            setRiscoo('Hipertensão estágio 1');
          }else if(pad>=100 && pad<110){
            setRiscoo('Hipertensão estágio 2');
          }else if(pad>=110){
            setRiscoo('Hipertensão estágio 3');
          }
        }
      }
      function Div2(){
        const [collapseVisible, setCollapseVisible] = useState(false);
          if(collapseVisible==false){
            return(
                <View
                      style={{ ...styles.openButton, backgroundColor: "#5baf8c", borderWidth:1, width:190, alignSelf:'center' }}
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
                {
                  Risco()
                }
                <View
                      style={{ ...styles.openButton, backgroundColor: "#5baf8c", borderWidth:1, width:190, alignSelf:'center' }}
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
          <HeaderTerciario title="Verificação Pressão Arterial" link="pages/saude"/>
          <StatusBar hidden={true} />
          <ScrollView style={{flex:1}}>
        <View style={styles.div}>
              <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>VERIFICAÇÃO DA PRESSÃO ARTERIAL (PA)</Text>
              <Text>A pressão arterial (PA) é classificada conforme a diretriz da Sociedade Brasileira de Cardiologia.</Text>
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Pressão Arterial Sistólica - PAS{'\n'}(mmHg){'\n'}{'\n'}{pAS} mmHg</Text>
              <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua PAS: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),1)}
                        placeholder="PAS"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Pressão Arterial Diastólica - PAD{'\n'}(mmHg){'\n'}{'\n'}{pAD} mmHg</Text>
              <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua PAD: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),2)}
                        placeholder="PAD"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  {
                    Div2()
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
    backgroundColor: "#e8331a",
    flexDirection:"column"
  },
  container: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: "#fafafa",
    backgroundColor : "#fafafa",
  },
  header: {
    width:'100%',
    padding:12,
    backgroundColor: "#e8331a",
    borderBottomWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    borderWidth:1,
    margin:15,
    width:125,
    padding:5,
    borderRadius:10,
    alignSelf:'center'
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