import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import { Colors } from '../../../../constants/Colors';

export default function Saude4() {
      const [idade, setIdade]=useState(0);
      const [iMC, setIMC]=useState(0);
      const [sexo, setSexo]=useState(true)
      const [cC, setCC]=useState(0);
      const [m, setM]=useState(0);
      const [mm, setMM]=useState(0);
      const [mmm, setMMM]=useState(0);
      const [a, setA]=useState(0);
      const [b, setB]=useState(0);
      const [c, setC]=useState(0);
      const [d, setD]=useState(0);
      const [e, setE]=useState(0);
      const [point, setPoint]=useState(0);
      const [risco, setRisco]=useState('Nenhum');
      const [riscoo, setRiscoo]=useState('');
      function Risco(){
        return(
          <View style={{borderTopWidth:1.5, borderColor:'gray', marginTop:25, marginBottom:15}}>
            <Text style={{color:'black', fontSize:22, textAlign:'center', marginTop:25}}>Total de pontos: {m+mm+mmm+a+b+c+d+e}</Text>
            <Text style={{color:'black', fontSize:22, textAlign:'center', fontWeight:'bold', marginBottom:10}}>{'\n'}Risco de Desenvolvimento de Diabete Melitus II</Text>
            <Text style={{color:'black', fontSize:22, textAlign:'center'}}>{risco}</Text>
            <Text style={{color:'black', fontSize:20, textAlign:'center', marginTop:25}}>{riscoo}</Text>
          </View>
        );
      }
      function Calc(n,k){
        let s=true,i=0,imc=0,cc=0,p=0,pp=0,ppp=0,pppp=0,ppppp=0,pppppp=0;
        if(k==1){
          setSexo(n);
          s=n;
          if(s==true && (cC<94)){
            setMMM(0);
            pppppp=m+mm+a+b+c+d+e;
            setPoint(m+mm+a+b+c+d+e);
          }else if(s==true && (cC>=94 && cC<=102)){
            setMMM(3);
            pppppp=m+mm+3+a+b+c+d+e;
            setPoint(m+mm+3+a+b+c+d+e);
          }else if(s==true && (cC>102)){
            setMMM(4);
            pppppp=m+mm+4+a+b+c+d+e;
            setPoint(m+mm+4+a+b+c+d+e);
          }else if(s==false && (cC<80)){
            setMMM(0);
            pppppp=m+mm+a+b+c+d+e;
            setPoint(m+mm+a+b+c+d+e);
          }else if(s==false && (cC>=80 && cC<=88)){
            setMMM(3);
            pppppp=m+mm+3+a+b+c+d+e;
            setPoint(m+mm+3+a+b+c+d+e);
          }else if(s==false && (cC>88)){
            setMMM(4);
            pppppp=m+mm+4+a+b+c+d+e;
            setPoint(m+mm+4+a+b+c+d+e);
          }
        }else if(k==2){
          if(n>=0 && n<=100){
            setIdade(n);
            i=n;
          }else if(n==101){
            i=n-1;
          }else if(n==-1){
            i=n+1;
          }
          if(i<45){
            setM(0);
            pppppp=mm+mmm+a+b+c+d+e;
            setPoint(mm+mmm+a+b+c+d+e);
          }else if(i>=45 && i<=54){
            setM(2);
            pppppp=2+mm+mmm+a+b+c+d+e;
            setPoint(2+mm+mmm+a+b+c+d+e);
          }else if(i>=55 && i<=64){
            setM(3);
            pppppp=3+mm+mmm+a+b+c+d+e;
            setPoint(3+mm+mmm+a+b+c+d+e);
          }else if(i>64){
            setM(4);
            pppppp=4+mm+mmm+a+b+c+d+e;
            setPoint(4+mm+mmm+a+b+c+d+e);
          }
        }else if(k==3){
          setIMC(n);
          imc=n;
          if(imc<25){
            setMM(0);
            pppppp=m+mmm+a+b+c+d+e;
            setPoint(m+mmm+a+b+c+d+e);
          }else if(imc>=25 && imc<=30){
            setMM(1);
            pppppp=m+1+mmm+a+b+c+d+e;
            setPoint(m+1+mmm+a+b+c+d+e);
          }else if(imc>30){
            setMM(3);
            pppppp=m+3+mmm+a+b+c+d+e;
            setPoint(m+3+mmm+a+b+c+d+e);
          }
        }else if(k==4){
          setCC(n);
          cc=n;
          if(sexo==true && (cc<94)){
            setMMM(0);
            pppppp=m+mm+a+b+c+d+e;
            setPoint(m+mm+a+b+c+d+e);
          }else if(sexo==true && (cc>=94 && cc<=102)){
            setMMM(3);
            pppppp=m+mm+3+a+b+c+d+e;
            setPoint(m+mm+3+a+b+c+d+e);
          }else if(sexo==true && (cc>102)){
            setMMM(4);
            pppppp=m+mm+4+a+b+c+d+e;
            setPoint(m+mm+4+a+b+c+d+e);
          }else if(sexo==false && (cc<80)){
            setMMM(0);
            pppppp=m+mm+a+b+c+d+e;
            setPoint(m+mm+a+b+c+d+e);
          }else if(sexo==false && (cc>=80 && cc<=88)){
            setMMM(3);
            pppppp=m+mm+3+a+b+c+d+e;
            setPoint(m+mm+3+a+b+c+d+e);
          }else if(sexo==false && (cc>88)){
            setMMM(4);
            pppppp=m+mm+4+a+b+c+d+e;
            setPoint(m+mm+4+a+b+c+d+e);
          }
        }else if(k==5){
          setA(n);
          p=n;
          pppppp=m+mm+mmm+p+b+c+d+e;
          setPoint(m+mm+mmm+p+b+c+d+e);
        }else if(k==6){
          setB(n);
          pp=n;
          pppppp=m+mm+mmm+a+pp+c+d+e;
          setPoint(m+mm+mmm+a+pp+c+d+e);
        }else if(k==7){
          setC(n);
          ppp=n;
          pppppp=m+mm+mmm+a+b+ppp+d+e;
          setPoint(m+mm+mmm+a+b+ppp+d+e);
        }else if(k==8){
          setD(n);
          pppp=n;
          pppppp=m+mm+mmm+a+b+c+pppp+e;
          setPoint(m+mm+mmm+a+b+c+pppp+e);
        }else if(k==9){
          setE(n);
          ppppp=n;
          pppppp=m+mm+mmm+a+b+c+d+ppppp;
          setPoint(m+mm+mmm+a+b+c+d+ppppp);
        }
        if(pppppp<7){
          setRisco('BAIXO');
          setRiscoo('(calcula-se que 1 em 100 pessoas desenvolverá a doença)');
        }else if(pppppp>=7 && pppppp<=11){
          setRisco('POUCO ELEVADO');
          setRiscoo('(calcula-se que 1 em 25 pessoas desenvolverá a doença)');
        }else if(pppppp>=12 && pppppp<=14){
          setRisco('MODERADO');
          setRiscoo('(calcula-se que 1 em 6 pessoas desenvolverá a doença)');
        }else if(pppppp>=15 && pppppp<=20){
          setRisco('ALTO');
          setRiscoo('(calcula-se que 1 em 3 pessoas desenvolverá a doença)');
        }else if(pppppp>20){
          setRisco('MUITO ALTO');
          setRiscoo('(calcula-se que 1 em 2 pessoas desenvolverá a doença)');
        }
      }
      function Div3(){
        const [collapseVisible, setCollapseVisible] = useState(false);
          if(collapseVisible==false){
            return(
                <View
                      style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
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
                      style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:190, alignSelf:'center' }}
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
          <StatusBar hidden={true}/>
          <HeaderTerciario title="Desenvolvimento Diabete Melitus II" pai='saude'/>
          <ScrollView style={{flex:1}}>
        <View style={styles.div}>
              <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>RISCO DE DIABETE MELITUS II</Text>
              <Text>O Finnish Diabetes Risk Score (FINDRISC) é uma ferramenta de controle de desenvolver DM II produzida em 2001 pelo Programa Nacional para a Diabetes Finlandês, tendo por base uma amostra representativa da população finlandesa. Baseia-se em oito questões sobre variáveis claramente relacionadas com o risco de desenvolver diabetes e fornece uma medida da probabilidade de vir a desenvolver diabetes ao longo dos 10 anos seguintes.</Text>
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
                    <AntDesign onPress={()=>Calc((idade-1),2)} name="minus" size={25} color="black" />
                    <Slider
                      style={{width: '65%', height: 27, marginRight:10, marginLeft:10}}
                      minimumValue={0}
                      maximumValue={100}
                      value={idade}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#FFFFFF"
                      onValueChange={value => Calc(value,2)}
                      step={1}
                    />
                    <AntDesign onPress={()=>Calc((idade+1),2)} name="plus" size={25} color="black" />
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}IMC{'\n'}{'\n'}{iMC}</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu IMC: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),3)}
                        placeholder="IMC"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>{'\n'}Circunferência da Cintura (CC){'\n'}{'\n'}{cC} cm</Text>
                  <View style={{flex:1, flexDirection:'row', alignSelf:'center', width:'100%'}}>
                    <Text style={{paddingTop:20}}>Informe seu CC: </Text>
                    <SafeAreaView style={{width:'100%', flex:1, flexDirection:'column'}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={text => Calc((parseFloat(text)),4)}
                        placeholder="CC"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                  </View>
                  <Text style={styles.paragraph}>{'\n'}{'\n'}Pratica diariamente atividade física pelo menos 30 minutos, no trabalho ou durante o tempo livre (incluindo atividades da vida diária)?</Text>
                  {
                  a==0 ?
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,5)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,5)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                  </View>
                    :
                    <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,5)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,5)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                  </View>
              }
              <Text style={styles.paragraph}>{'\n'}{'\n'}Com que regularidade come vegetais{'\n'}e/ou fruta?</Text>
                  {
                  b==0 ?
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,6)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>Todos os dias</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,6)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>Às vezes</Text>
                    </View>
                  </View>
                    :
                    <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,6)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>Todos os dias</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,6)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>Às vezes</Text>
                    </View>
                  </View>
              }
              <Text style={styles.paragraph}>{'\n'}{'\n'}Toma regularmente ou já tomou alguma medicação para a hipertensão arterial?</Text>
                  {
                  c==0 ?
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,7)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,7)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                  </View>
                    :
                    <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,7)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,7)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                  </View>
              }
              <Text style={styles.paragraph}>{'\n'}{'\n'}Alguma vez teve açúcar elevado no sangue (ex. num exame de saúde, durante um período de doença ou durante a gravidez)?</Text>
                  {
                  d==0 ?
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,8)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,8)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                  </View>
                    :
                    <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,8)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(2,8)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM</Text>
                    </View>
                  </View>
              }
              <Text style={styles.paragraph}>{'\n'}{'\n'}Tem algum membro da família próxima ou outros familiares a quem foi diagnosticado diabetes (tipo 1 ou tipo 2)?</Text>
                  {
                  e==0 ?
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,9)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(3,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, avós ou primos 1º grau</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(5,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, pais, irmão ou filhos</Text>
                    </View>
                  </View>
                    :
                    e==3 ?
                    <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(3,9)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, avós ou primos 1º grau</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(5,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, pais, irmão ou filhos</Text>
                    </View>
                  </View>
                  :
                  <View style={{marginTop:15}}>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(0,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>NÃO</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(3,9)}><AntDesign name="checkcircleo" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, avós ou primos 1º grau</Text>
                    </View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Calc(5,9)}><AntDesign name="checkcircle" size={30} color="black" /></TouchableOpacity>
                      <Text style={styles.paragraph}>SIM, pais, irmão ou filhos</Text>
                    </View>
                  </View>
              }
              <View style={{height:10}}></View>
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
    backgroundColor:"#e8331a",
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:5
  },
  paragraph: {
    fontSize: 15,
    marginLeft:5
  },
  checkbox: {
    margin: 8,
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