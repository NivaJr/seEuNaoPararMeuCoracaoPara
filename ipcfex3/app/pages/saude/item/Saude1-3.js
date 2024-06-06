import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EstiloComum from "../../EstiloComum";
import Slider from '@react-native-community/slider';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Saude1_3() {
  const [cC,setCC]=useState(0);
  const [cQ,setCQ]=useState(1);
  const [idade,setIdade]=useState(20);
  const [sexo,setSexo]=useState(true);
  const [riscoo,setRiscoo]=useState('Nenhum');
  function Risco(){
    return (riscoo);
  }
  function Calc(n,k){
    let rCQ=0,s=true,i=20;
    if(k==1){
      setSexo(n);
      s=n;
      rCQ=cC/cQ
    }else if(k==2){
      if(n>=20 && n<=69){
        setIdade(n);
        i=n;
      }else if(n==70){
        i=n-1;
      }else if(n==19){
        i=n+1;
      }
      rCQ=cC/cQ
    }else if(k==3){
      setCC(n);
      rCQ=n/cQ
    }else if(k==4){
      setCQ(n);
      rCQ=cC/n
    }
    if(s==true){
      if(i<=29 && i>=20){
        if(rCQ<0.83){
          setRiscoo('Baixo')
        }else if(rCQ<=0.88 && rCQ>=0.83){
          setRiscoo('Moderado')
        }else if(rCQ<=0.94 && rCQ>=0.89){
          setRiscoo('Alto')
        }else if(rCQ>0.94){
          setRiscoo('Muito alto')
        }
      }else if(i<=39 && i>=30){
        if(rCQ<0.84){
          setRiscoo('Baixo')
        }else if(rCQ<=0.91 && rCQ>=0.84){
          setRiscoo('Moderado')
        }else if(rCQ<=0.96 && rCQ>=0.92){
          setRiscoo('Alto')
        }else if(rCQ>0.96){
          setRiscoo('Muito alto')
        }
      }else if(i<=49 && i>=40){
        if(rCQ<0.88){
          setRiscoo('Baixo')
        }else if(rCQ<=0.95 && rCQ>=0.88){
          setRiscoo('Moderado')
        }else if(rCQ<=1.00 && rCQ>=0.96){
          setRiscoo('Alto')
        }else if(rCQ>1){
          setRiscoo('Muito alto')
        }
      }else if(i<=59 && i>=50){
        if(rCQ<0.90){
          setRiscoo('Baixo')
        }else if(rCQ<=0.96 && rCQ>=0.90){
          setRiscoo('Moderado')
        }else if(rCQ<=1.02 && rCQ>=0.97){
          setRiscoo('Alto')
        }else if(rCQ>1.02){
          setRiscoo('Muito alto')
        }
      }else if(i<=69 && i>=60){
        if(rCQ<0.91){
          setRiscoo('Baixo')
        }else if(rCQ<=0.98 && rCQ>=0.91){
          setRiscoo('Moderado')
        }else if(rCQ<=1.03 && rCQ>=0.99){
          setRiscoo('Alto')
        }else if(rCQ>1.03){
          setRiscoo('Muito alto')
        }
      }
    }else{
      if(i<=29 && i>=20){
        if(rCQ<0.71){
          setRiscoo('Baixo')
        }else if(rCQ<=0.77 && rCQ>=0.71){
          setRiscoo('Moderado')
        }else if(rCQ<=0.82 && rCQ>=0.78){
          setRiscoo('Alto')
        }else if(rCQ>0.82){
          setRiscoo('Muito alto')
        }
      }else if(i<=39 && i>=30){
        if(rCQ<0.72){
          setRiscoo('Baixo')
        }else if(rCQ<=0.78 && rCQ>=0.72){
          setRiscoo('Moderado')
        }else if(rCQ<=0.84 && rCQ>=0.79){
          setRiscoo('Alto')
        }else if(rCQ>0.84){
          setRiscoo('Muito alto')
        }
      }else if(i<=49 && i>=40){
        if(rCQ<0.73){
          setRiscoo('Baixo')
        }else if(rCQ<=0.79 && rCQ>=0.73){
          setRiscoo('Moderado')
        }else if(rCQ<=0.87 && rCQ>=0.80){
          setRiscoo('Alto')
        }else if(rCQ>0.87){
          setRiscoo('Muito alto')
        }
      }else if(i<=59 && i>=50){
        if(rCQ<0.74){
          setRiscoo('Baixo')
        }else if(rCQ<=0.81 && rCQ>=0.74){
          setRiscoo('Moderado')
        }else if(rCQ<=0.88 && rCQ>=0.82){
          setRiscoo('Alto')
        }else if(rCQ>0.88){
          setRiscoo('Muito alto')
        }
      }else if(i<=69 && i>=60){
        if(rCQ<0.76){
          setRiscoo('Baixo')
        }else if(rCQ<=0.83 && rCQ>=0.76){
          setRiscoo('Moderado')
        }else if(rCQ<=0.90 && rCQ>=0.84){
          setRiscoo('Alto')
        }else if(rCQ>0.90){
          setRiscoo('Muito alto')
        }
      }
    }
  }
  console.disableYellowBox = true;
    function Div2(){
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
              <View style={{flexDirection: 'row', width:'100%', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25, justifyContent:'center'}}>
                <Text style={{color:'black', fontSize:22}}>RCQ = {(cC/cQ).toFixed(2)}</Text>
              </View>
              <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Risco de Doenças Coronarianas</Text>
              <Text style={{color:'black', fontSize:22, textAlign:'center'}}>{Risco()}</Text>
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
              <StatusBar hidden={true} />
              <HeaderTerciario title="RCQ" link="pages/saude/item/Saude-1"/>
              <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>RCQ</Text>
                  <Text>A RCQ, que se baseia na razão entre os valores de CC e CA, ambos em centímetros, representa a distribuição do tecido adiposo, sendo parcialmente independente da adiposidade total.
                  </Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Sexo</Text>
                  {
                  sexo==true ?
                  <View style={{flex:1, flexDirection:'column', marginTop:10}}>
                    <TouchableOpacity onPress={()=>Calc(true,1)} style={{...styles.btn, backgroundColor:'rgba(0, 0, 255, 0.8)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Masculino</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>Calc(false,1)} style={{...styles.btn, backgroundColor:'rgba(255, 38, 106, 0.2)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Feminino</Text></TouchableOpacity>
                  </View>
                    :
                    <View style={{flex:1, flexDirection:'column', marginTop:10}}>
                    <TouchableOpacity onPress={()=>Calc(true,1)} style={{...styles.btn, backgroundColor:'rgba(0, 0, 255, 0.2)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Masculino</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>Calc(false,1)} style={{...styles.btn, backgroundColor:'rgba(255, 38, 106, 0.8)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Feminino</Text></TouchableOpacity>
                  </View>
              }
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Idade{'\n'}{'\n'}{idade}</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>Calc(idade-1,2)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={20}
                      maximumValue={69}
                      value={idade}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => Calc(value,2)}
                      step={1}
                    />
                    <AntDesign onPress={()=>Calc(idade+1,2)} name="plus" size={25} color="black" />
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Circunferência da Cintura - CC (cm){'\n'}{'\n'}{cC} cm</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu CC: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc(parseFloat(text),3)}
                        placeholder="CC"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Circunferência do Quadril - CQ (cm){'\n'}{'\n'}{cQ} cm</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu CQ: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc(parseFloat(text),4)}
                        placeholder="CQ"
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
    borderWidth:1,
    margin:15,
    width:140,
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