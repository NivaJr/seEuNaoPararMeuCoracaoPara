import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EstiloComum from "../../EstiloComum";
import Slider from '@react-native-community/slider';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Saude1_4() {
  const [sexoo,setSexoo]=useState(1);
  const [c,setC]=useState(0);
  const [massaa,setMassaa]=useState(0);
  const [estaturaa,setEstaturaa]=useState(1);
  const [idadee,setIdadee]=useState(18);
  const [riscooo,setRiscooo]=useState('Nada');
  console.disableYellowBox = true;
    function Risco(){
      return (riscooo);
    }
    function Calc(n,k){
      let gC=0,s=1,i=20;
      if(k==1){
        setSexoo(n);
        s=n;
        gC=(((16.37*n)+(0.663*c)-(0.001*massaa*massaa)+(0.1*idadee)-(0.088*estaturaa)-41.84))
      }else if(k==2){
        if(n>=18 && n<=69){
          setIdadee(n);
          i=n;
        }else if(n==70){
          i=n-1;
        }else if(n==17){
          i=n+1;
        }
        gC=(((16.37*sexoo)+(0.663*c)-(0.001*massaa*massaa)+(0.1*n)-(0.088*estaturaa)-41.84))
      }else if(k==3){
        setC(n);
        gC=(((16.37*sexoo)+(0.663*n)-(0.001*massaa*massaa)+(0.1*idadee)-(0.088*estaturaa)-41.84))
      }else if(k==4){
        setMassaa(n);
        gC=(((16.37*sexoo)+(0.663*c)-(0.001*n*n)+(0.1*idadee)-(0.088*estaturaa)-41.84))
      }else if(k==5){
        setEstaturaa(n);
        gC=(((16.37*sexoo)+(0.663*c)-(0.001*massaa*massaa)+(0.1*idadee)-(0.088*n)-41.84))
      }
      if(s==1){
        if(i<=25 && i>=18){
          if(gC<8 && gC>=4){
            setRiscooo('Excelente')
          }else if(gC<12 && gC>=8){
            setRiscooo('Bom')
          }else if(gC<14 && gC>=12){
            setRiscooo('Acima da média')
          }else if(gC<17 && gC>=14){
            setRiscooo('Média')
          }else if(gC<21 && gC>=17){
            setRiscooo('Abaixo da Média')
          }else if(gC<25 && gC>=21){
            setRiscooo('Ruim')
          }else if(gC<37 && gC>=25){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=35 && i>=26){
          if(gC<12 && gC>=8){
            setRiscooo('Excelente')
          }else if(gC<16 && gC>=12){
            setRiscooo('Bom')
          }else if(gC<19 && gC>=16){
            setRiscooo('Acima da média')
          }else if(gC<22 && gC>=19){
            setRiscooo('Média')
          }else if(gC<25 && gC>=22){
            setRiscooo('Abaixo da Média')
          }else if(gC<28 && gC>=25){
            setRiscooo('Ruim')
          }else if(gC<37 && gC>=28){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=45 && i>=36){
          if(gC<7 && gC>=10){
            setRiscooo('Excelente')
          }else if(gC<19 && gC>=16){
            setRiscooo('Bom')
          }else if(gC<22 && gC>=19){
            setRiscooo('Acima da média')
          }else if(gC<24 && gC>=22){
            setRiscooo('Média')
          }else if(gC<26 && gC>=24){
            setRiscooo('Abaixo da Média')
          }else if(gC<30 && gC>=26){
            setRiscooo('Ruim')
          }else if(gC<40 && gC>=30){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=55 && i>=46){
          if(gC<18 && gC>=12){
            setRiscooo('Excelente')
          }else if(gC<21 && gC>=18){
            setRiscooo('Bom')
          }else if(gC<24 && gC>=21){
            setRiscooo('Acima da média')
          }else if(gC<26 && gC>=24){
            setRiscooo('Média')
          }else if(gC<28 && gC>=26){
            setRiscooo('Abaixo da Média')
          }else if(gC<32 && gC>=28){
            setRiscooo('Ruim')
          }else if(gC<39 && gC>=32){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=65 && i>=56){
          if(gC<20 && gC>=13){
            setRiscooo('Excelente')
          }else if(gC<22 && gC>=20){
            setRiscooo('Bom')
          }else if(gC<24 && gC>=22){
            setRiscooo('Acima da média')
          }else if(gC<26 && gC>=24){
            setRiscooo('Média')
          }else if(gC<28 && gC>=26){
            setRiscooo('Abaixo da Média')
          }else if(gC<32 && gC>=28){
            setRiscooo('Ruim')
          }else if(gC<39 && gC>=32){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }
      }else if(s==2){
        if(i<=25 && i>=18){
          if(gC<17 && gC>=13){
            setRiscooo('Excelente')
          }else if(gC<20 && gC>=17){
            setRiscooo('Bom')
          }else if(gC<23 && gC>=20){
            setRiscooo('Acima da média')
          }else if(gC<26 && gC>=23){
            setRiscooo('Média')
          }else if(gC<29 && gC>=26){
            setRiscooo('Abaixo da Média')
          }else if(gC<32 && gC>=29){
            setRiscooo('Ruim')
          }else if(gC<44 && gC>=32){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=35 && i>=26){
          if(gC<18 && gC>=14){
            setRiscooo('Excelente')
          }else if(gC<21 && gC>=18){
            setRiscooo('Bom')
          }else if(gC<24 && gC>=21){
            setRiscooo('Acima da média')
          }else if(gC<27 && gC>=24){
            setRiscooo('Média')
          }else if(gC<30 && gC>=27){
            setRiscooo('Abaixo da Média')
          }else if(gC<34 && gC>=30){
            setRiscooo('Ruim')
          }else if(gC<50 && gC>=34){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=45 && i>=36){
          if(gC<20 && gC>=16){
            setRiscooo('Excelente')
          }else if(gC<24 && gC>=20){
            setRiscooo('Bom')
          }else if(gC<27 && gC>=24){
            setRiscooo('Acima da média')
          }else if(gC<30 && gC>=27){
            setRiscooo('Média')
          }else if(gC<33 && gC>=30){
            setRiscooo('Abaixo da Média')
          }else if(gC<37 && gC>=33){
            setRiscooo('Ruim')
          }else if(gC<49 && gC>=37){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=55 && i>=46){
          if(gC<22 && gC>=17){
            setRiscooo('Excelente')
          }else if(gC<26 && gC>=22){
            setRiscooo('Bom')
          }else if(gC<29 && gC>=26){
            setRiscooo('Acima da média')
          }else if(gC<32 && gC>=29){
            setRiscooo('Média')
          }else if(gC<35 && gC>=32){
            setRiscooo('Abaixo da Média')
          }else if(gC<39 && gC>=35){
            setRiscooo('Ruim')
          }else if(gC<51 && gC>=39){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }else if(i<=65 && i>=56){
          if(gC<23 && gC>=18){
            setRiscooo('Excelente')
          }else if(gC<27 && gC>=23){
            setRiscooo('Bom')
          }else if(gC<30 && gC>=27){
            setRiscooo('Acima da média')
          }else if(gC<33 && gC>=30){
            setRiscooo('Média')
          }else if(gC<36 && gC>=33){
            setRiscooo('Abaixo da Média')
          }else if(gC<39 && gC>=36){
            setRiscooo('Ruim')
          }else if(gC<50 && gC>=39){
            setRiscooo('Muito Ruim')
          }else{
            setRiscooo('')
          }
        }
      }
    }
    function Div3(){
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
                <Text style={{color:'black', fontSize:22}}>%GC = {(((16.37*sexoo)+(0.663*c)-(0.001*massaa*massaa)+(0.1*idadee)-(0.088*estaturaa)-41.84)).toFixed(2)}</Text>
              </View>
              <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Classificação</Text>
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
              <HeaderTerciario title="Percentual de Gordura" pai='saude/item/Saude-1'/>
              <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>Percentual de Gordura Corporal{'\n'}(%GC)</Text>
                  <Text>O percentual de gordura corporal (%GC) é a quantidade de gordura que uma pessoa possui, medida em percentagem em relação a massa corporal total.
                  </Text>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Sexo</Text>
                  {
                  sexoo==1 ?
                  <View style={{flex:1, flexDirection:'column', marginTop:10}}>
                    <TouchableOpacity onPress={()=>Calc(1,1)} style={{...styles.btn, backgroundColor:'rgba(0, 0, 255, 0.8)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Masculino</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>Calc(2,1)} style={{...styles.btn, backgroundColor:'rgba(255, 38, 106, 0.2)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Feminino</Text></TouchableOpacity>
                  </View>
                    :
                    <View style={{flex:1, flexDirection:'column', marginTop:10}}>
                    <TouchableOpacity onPress={()=>Calc(1,1)} style={{...styles.btn, backgroundColor:'rgba(0, 0, 255, 0.2)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Masculino</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>Calc(2,1)} style={{...styles.btn, backgroundColor:'rgba(255, 38, 106, 0.8)'}}><Text style={{fontSize:21, color: 'white', textAlign: 'center', letterSpacing:1}}>Feminino</Text></TouchableOpacity>
                  </View>
              }
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Idade{'\n'}{'\n'}{idadee}</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center'}}>
                    <AntDesign onPress={()=>Calc((idadee-1),2)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={18}
                      maximumValue={65}
                      value={idadee}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => Calc(value,2)}
                      step={1}
                    />
                    <AntDesign onPress={()=>Calc((idadee+1),2)} name="plus" size={25} color="black" />
                  </View>
                  {
                    sexoo==1?<View><Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Circunferência Abdominal - CA{'\n'}(cm){'\n'}{'\n'}{c} cm</Text><View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu CA: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),3)}
                        placeholder="CA"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View></View>:<View><Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Circunferência Cintura - CC{'\n'}(cm){'\n'}{'\n'}{c} cm</Text><View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu CC: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),3)}
                        placeholder="CC"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View></View>
                  }
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Massa Corporal (kg){'\n'}{'\n'}{massaa} kg</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua Massa: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),4)}
                        placeholder="Massa"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Estatura (cm){'\n'}{'\n'}{estaturaa} cm</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe sua Estatura: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),5)}
                        placeholder="Estatura"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  {
                    Div3()
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
        height: '60%',
        width:'80%',
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