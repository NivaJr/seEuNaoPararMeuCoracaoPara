import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, StatusBar } from 'react-native';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Saude2() {
  const [sexo, setSexo] = useState(true);
  const [cC, setCC] = useState(0);
  const [triglicerideos, setTriglicerideos] = useState(0);
  const [hDLC, setHDLC] = useState();
  const [glicose, setGlicose] = useState(0);
  const [pAS, setPAS] = useState(0);
  const [pAD, setPAD] = useState(0);
  const [med, setMed] = useState(false);
  const [medd, setMedd] = useState(false);
  const [meddd, setMeddd] = useState(false);
  const [medddd, setMedddd] = useState(false);
  const [risco, setRisco] = useState([]);
  const [riscoo, setRiscoo] = useState([]);
  const [riscooo, setRiscooo] = useState([]);
  const [riscoooo, setRiscoooo] = useState([]);
  const [riscooooo, setRiscooooo] = useState([]);
  function Risco() {
    if (risco == '' && riscoo == '' && riscooo == '' && riscoooo == '' && riscooooo == '') {
      return (
        <View>
          <Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>Nenhum{'\n'}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }}>{risco}{riscoo}{riscooo}{riscoooo}{riscooooo}</Text>
        </View>
      )
    }
  }
  function Calc(n, k) {
    let s = true, c = 1, pas = 1, pad = 1, g = 1, t = 1, h = 60, ch = false, cg = false, ct = false, chh = false;
    if (k == 1) {
      setSexo(n);
      s = n;
      if ((s == true && cC > 90) || (s == false && cC > 80)) {
        setRisco('Obesidade Central\n');
      } else {
        setRisco('');
      }
      if ((s == true && (hDLC < 40 || medddd == true)) || (s == false && (hDLC < 50 || medddd == true))) {
        setRiscooooo('HDL colesterol\n');
      } else {
        setRiscooooo('');
      }
    } else if (k == 2) {
      setCC(n);
      c = n;
      if ((sexo == true && c > 90) || (sexo == false && c > 80)) {
        setRisco('Obesidade Central\n');
      } else {
        setRisco('');
      }
    } else if (k == 3) {
      setPAS(n);
      pas = n;
      if (pas >= 130 || pAD >= 85 || med == true) {
        setRiscoo('Hipertensão Arterial\n');
      } else {
        setRiscoo('');
      }
    } else if (k == 4) {
      setPAD(n);
      pad = n;
      if (pAS >= 130 || pad >= 85 || med == true) {
        setRiscoo('Hipertensão Arterial\n');
      } else {
        setRiscoo('');
      }
    } else if (k == 5) {
      setMed(n);
      ch = n;
      if (pAS >= 130 || pAD >= 85 || ch == true) {
        setRiscoo('Hipertensão Arterial\n');
      } else {
        setRiscoo('');
      }
    } else if (k == 6) {
      setGlicose(n);
      g = n;
      if (g >= 100 || medd == true) {
        setRiscooo('Glicemia\n');
      } else {
        setRiscooo('');
      }
    } else if (k == 7) {
      setMedd(n);
      cg = n;
      if (glicose >= 100 || cg == true) {
        setRiscooo('Glicemia\n');
      } else {
        setRiscooo('');
      }
    } else if (k == 8) {
      setTriglicerideos(n);
      t = n;
      if (t >= 150 || meddd == true) {
        setRiscoooo('Triglicerídeos\n');
      } else {
        setRiscoooo('');
      }
    } else if (k == 9) {
      setMeddd(n);
      ct = n;
      if (triglicerideos >= 150 || ct == true) {
        setRiscoooo('Triglicerídeos\n');
      } else {
        setRiscoooo('');
      }
    } else if (k == 10) {
      setHDLC(n);
      h = n;
      if ((sexo == true && (h < 40 || medddd == true)) || (sexo == false && (h < 50 || medddd == true))) {
        setRiscooooo('HDL colesterol\n');
      } else {
        setRiscooooo('');
      }
    } else if (k == 11) {
      setMedddd(n);
      chh = n;
      if ((sexo == true && (hDLC < 40 || chh == true)) || (sexo == false && (hDLC < 50 || chh == true))) {
        setRiscooooo('HDL colesterol\n');
      } else {
        setRiscooooo('');
      }
    }
  }
  function Div1() {
    const [collapseVisible, setCollapseVisible] = useState(false);
    if (collapseVisible == false) {
      return (
        <View
          style={{ ...styles.openButton, backgroundColor: "#5baf8c", borderWidth: 1, width: 190, alignSelf: 'center', marginTop: 30 }}
          onTouchEnd={() => {
            setCollapseVisible(true);
          }}
        >
          <Text style={styles.textStyle}>MOSTRAR RESULTADO</Text>
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', borderTopWidth: 1.5, borderColor: 'gray', paddingTop: 25, marginTop: 25, marginBottom: 15 }}>
            <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginLeft: '12.5%' }}>Fatores de Risco da SM apresentados</Text>
          </View>
          {
            Risco()
          }
          <View
            style={{ ...styles.openButton, backgroundColor: "#5baf8c", borderWidth: 1, width: 190, alignSelf: 'center' }}
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
      <HeaderTerciario title="Identificação de Fatores de Risco de Síndrome Metabólica" pai='saude'/>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.div}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>SÍNDROME METABÓLICA (SM)</Text>
          <Text>Para identificar os fatores de risco da Síndrome Metabólica (SM), se utiliza os pontos de corte estabelecidos pelo último consenso mundial (Joint Interim Statement-JIS), realizado em 2009.
              </Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Sexo</Text>
          {
            sexo == true ?
              <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                <TouchableOpacity onPress={() => Calc(true, 1)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>Masculino</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => Calc(false, 1)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>Feminino</Text></TouchableOpacity>
              </View>
              :
              <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                <TouchableOpacity onPress={() => Calc(true, 1)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>Masculino</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => Calc(false, 1)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>Feminino</Text></TouchableOpacity>
              </View>
          }

          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Circunferência da Cintura Superior (cm){'\n'}{'\n'}{cC} cm</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe seu CC: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 2)}
                placeholder="CC"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Pressão Arterial Sistólica - PAS{'\n'}(mmHg){'\n'}{'\n'}{pAS} mmHg</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe sua PAS: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 3)}
                placeholder="PAS"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Pressão Arterial Diastólica - PAD{'\n'}(mmHg){'\n'}{'\n'}{pAD} mmHg</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe sua PAD: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 4)}
                placeholder="PAD"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          {
            med == true ?
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de hipertensão?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 5)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 5)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
              :
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de hipertensão?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 5)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 5)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
          }
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Glicose (mg/dl){'\n'}{'\n'}{glicose} mg/dl</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe sua glicose: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 6)}
                placeholder="Glicose"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          {
            medd == true ?
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle da glicemia?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 7)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 7)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
              :
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle da glicemia?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 7)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 7)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
          }
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}Triglicerídeo (mg/dl){'\n'}{'\n'}{triglicerideos} mg/dl</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe seu triglicerídeo: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 8)}
                placeholder="Triglicerídeo"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          {
            meddd == true ?
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de triglicerídeos?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 9)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 9)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
              :
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de triglicerídeos?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 9)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 9)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
          }
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{'\n'}HDL-C (mg/dl){'\n'}{'\n'}{hDLC} mg/dl</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '100%' }}>
            <Text style={{ paddingTop: 20 }}>Informe seu HDL-C: </Text>
            <SafeAreaView style={{ width: '100%', flex: 1, flexDirection: 'column' }}>
              <TextInput
                style={styles.input}
                onChangeText={text => Calc((parseFloat(text)), 10)}
                placeholder="HDL-C"
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          {
            medddd == true ?
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de HDL-C?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 11)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 11)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
              :
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Usa medicamento para controle de HDL-C?{'\n'}</Text>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => Calc(true, 11)} style={{ ...styles.btn, backgroundColor: 'rgba(0, 0, 255, 0.2)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>SIM</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => Calc(false, 11)} style={{ ...styles.btn, backgroundColor: 'rgba(255, 38, 106, 0.8)' }}><Text style={{ fontSize: 21, color: 'white', textAlign: 'center', letterSpacing: 1 }}>NÃO</Text></TouchableOpacity>
                </View>
              </View>
          }
          {
            Div1()
          }
        </View>
        <View style={{ height: 100 }}></View>
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
    backgroundColor: 'white',
    elevation: 1,
    margin: 15,
    padding: 15
  },
  bt: {
    alignSelf: 'center',
    borderBottomColor: 'white',
    height: '12.7%',
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#e8331a",
    flexDirection: "column"
  },
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#fafafa",
    backgroundColor: "#fafafa",
  },
  header: {
    width: '100%',
    padding: 12,
    backgroundColor: "#e8331a",
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    borderWidth: 1,
    margin: 15,
    width: 140,
    padding: 5,
    borderRadius: 10,
    alignSelf: 'center'
  },
  image2: {
    height: 60,
    width: 140,
    marginLeft: 18,
    position: 'relative',
    left: '150%',
    resizeMode: 'contain'
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    maxHeight: '70%',
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    elevation: 2
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 4
  },
  textStyle: {
    color: "white",
    fontFamily: 'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});