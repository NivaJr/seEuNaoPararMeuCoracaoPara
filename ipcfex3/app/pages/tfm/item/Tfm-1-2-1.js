import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Image, TouchableHighlight, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import { Colors } from '../../../../constants/Colors';
import fig41a from '../../../../assets/images/fig4-1-a.png';
import fig41b from '../../../../assets/images/fig4-1-b.png';
import fig41c from '../../../../assets/images/fig4-1-c.png';
import fig41d from '../../../../assets/images/fig4-1-d.png';
import fig41e from '../../../../assets/images/fig4-1-e.png';
import fig42a from '../../../../assets/images/fig4-2-a.png';
import fig42b from '../../../../assets/images/fig4-2-b.png';
import fig42c from '../../../../assets/images/fig4-2-c.png';
import fig42d from '../../../../assets/images/fig4-2-d.png';
import fig43a from '../../../../assets/images/fig4-3-a.png';
import fig43b from '../../../../assets/images/fig4-3-b.png';
import fig43c from '../../../../assets/images/fig4-3-c.png';
import fig43d from '../../../../assets/images/fig4-3-d.png';
import fig43e from '../../../../assets/images/fig4-3-e.png';
import fig44a from '../../../../assets/images/fig4-4-a.png';
import fig44b from '../../../../assets/images/fig4-4-b.png';
import fig44c from '../../../../assets/images/fig4-4-c.png';
import fig44d from '../../../../assets/images/fig4-4-d.png';
import fig44e from '../../../../assets/images/fig4-4-e.png';
import fig45a from '../../../../assets/images/fig4-5-a.png';
import fig45b from '../../../../assets/images/fig4-5-b.png';
import fig45c from '../../../../assets/images/fig4-5-c.png';
import fig45d from '../../../../assets/images/fig4-5-d.png';
import fig46a from '../../../../assets/images/fig4-6-a.png';
import fig46b from '../../../../assets/images/fig4-6-b.png';
import fig46c from '../../../../assets/images/fig4-6-c.png';
import fig47a from '../../../../assets/images/fig4-7-a.png';
import fig47b from '../../../../assets/images/fig4-7-b.png';
import fig47c from '../../../../assets/images/fig4-7-c.png';
import fig47d from '../../../../assets/images/fig4-7-d.png';
import fig47e from '../../../../assets/images/fig4-7-e.png';
import fig48a from '../../../../assets/images/fig4-8-a.png';
import fig48b from '../../../../assets/images/fig4-8-b.png';
import fig48c from '../../../../assets/images/fig4-8-c.png';
import fig48d from '../../../../assets/images/fig4-8-d.png';
import fig48e from '../../../../assets/images/fig4-8-e.png';
import fig49a from '../../../../assets/images/fig4-9-a.png';
import fig49b from '../../../../assets/images/fig4-9-b.png';
import fig49c from '../../../../assets/images/fig4-9-c.png';
import fig49d from '../../../../assets/images/fig4-9-d.png';
import fig49e from '../../../../assets/images/fig4-9-e.png';
import fig49f from '../../../../assets/images/fig4-9-f.png';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm8_2_1() {
  function Div1() {
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    const [collapseVisible, setCollapseVisible] = useState(false);
    function Conteudo() {
      if (conteudo == 1) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA COM CIRCUNDUÇÃO DOS BRAÇOS</Text>
            <Text>15 a 20 s de corrida ritmada (saltitando), com circundução dos braços para
frente, seguida de mais 15 a 20 s de corrida, com circundução dos braços
para trás. Os braços deverão passar o mais próximo possível das orelhas,
de acordo com a amplitude articular individual (Fig 4-1.a a 4-1.e).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig41a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-1.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig41b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-1.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig41c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-1.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig41d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-1.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig41e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-1.e</Text>
          </ScrollView>
        );
      } else if (conteudo == 2) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>ADUÇÃO E ABDUÇÃO DE BRAÇOS NA HORIZONTAL</Text>
            <Text>15 a 20 s de corrida ritmada (saltitando), com adução dos braços à frente,
executando duas batidas de mãos, seguida da abdução dos braços para
trás, hiperestendendo-os também por duas vezes (Fig 4-2.a a 4-2.d).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig42a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-2.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig42b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-2.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig42c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-2.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig42d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-2.d</Text>
          </ScrollView>
        );
      } else if (conteudo == 3) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>EXTENSÃO ALTERADA DE BRAÇOS NA VERTICAL</Text>
            <Text>15 a 20 s de corrida ritmada (saltitando), com extensão alternada dos
braços na vertical, de maneira que, quando o braço esquerdo estiver para
cima, a perna direita estará à frente e vice-versa. (Fig 4-3.a a 4-3.e).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig43a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-3.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig43b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-3.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig43c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-3.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig43d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-3.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig43e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-3.e</Text>
          </ScrollView>
        );
      } else if (conteudo == 4) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>POLICHINELO</Text>
            <Text>15 a 20 s de corrida ritmada (saltitando), com a execução de batidas de
mãos acima da cabeça, seguidas de batidas de mãos nas coxas: Fig 4-4.a
a 4-4.e.{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig44a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-4.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig44b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-4.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig44c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-4.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig44d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-4.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig44e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-4.e</Text>
          </ScrollView>
        );
      } else if (conteudo == 5) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA COM TORÇÃO DE TRONCO</Text>
            <Text>15 a 20 s de corrida com torção de tronco, com a perna sendo levemente
elevada e lançada no sentido contrário ao do giro do tronco buscando
olhar para trás (Fig 4-5.a e 4-5.d). O movimento será repetido a cada
três passadas.{'\n'}Obs.: deverá haver o cuidado para não se realizar flexão junto com a
torção, para evitar o estresse das vértebras.{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig45a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-5.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig45b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-5.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig45c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-5.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig45d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-5.d</Text>
          </ScrollView>
        );
      } else if (conteudo == 6) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA LATERAL</Text>
            <Text>15 a 20 s de corrida com passada lateral, sem cruzar as pernas, mantendo a mesma direção de deslocamento. Ao terminar, inverter a frente
mantendo a direção de deslocamento e prosseguindo por mais 15 a 20 s
(Fig 4-6.a a 4-6.c).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig46a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-6.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig46b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-6.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig46c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-6.c</Text>
          </ScrollView>
        );
      } else if (conteudo == 7) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA COM EXTENSÃO DA PERNA À FRENTE</Text>
            <Text>15 a 20 s de corrida elevando a perna estendida à frente e de maneira
alternada. A cada três passos o movimento deve ser repetido (Fig 4-7.a a
4-7.e).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig47a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-7.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig47b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-7.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig47c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-7.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig47d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-7.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig47e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-7.e</Text>
          </ScrollView>
        );
      } else if (conteudo == 8) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA COM ELEVAÇÃO DOS CALCANHARES</Text>
            <Text>15 a 20 s de corrida elevando os calcanhares, alternadamente, até a altura
dos glúteos, buscando manter o tronco na vertical (Fig 4-8.a a 4-8.b).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig48a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-8.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig48b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-8.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig48c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-8.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig48d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-8.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig48e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-8.e</Text>
          </ScrollView>
        );
      } else if (conteudo == 9) {
        return (
          <ScrollView>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>CORRIDA COM ELEVAÇÃO DOS JOELHOS</Text>
            <Text>15 a 20 s de corrida elevando os joelhos, alternadamente, até a altura dos
quadris (Fig 4-9.a a 4-9.f).{'\n'}</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49a}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.a</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49b}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.b</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49c}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.c</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49d}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.d</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49e}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.e</Text>
            <Image style={{ alignSelf: 'center' }} source={fig49f}></Image>
            <Text style={{ alignSelf: 'center', marginBottom: 25 }}>Fig 4-9.f</Text>
          </ScrollView>
        );
      }
    }
    if (collapseVisible == false) {
      return (
        <View
          style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: 120, alignSelf: 'center' }}
          onTouchEnd={() => {
            setCollapseVisible(true);
          }}
        >
          <Text style={styles.textStyle}>EXIBIR MAIS</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {
                  Conteudo()
                }
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: 90 }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={{ ...styles.textStyle, fontFamily: 'BlackOpsOne_400Regular' }}>VOLTAR</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Text style={{ color: 'black', borderTopWidth: 1.5, borderColor: 'gray', paddingTop: 25, marginTop: 25 }}>Os botões 1 a 9 a seguir indicam a ordem dos exercícios de aquecimento em movimento.</Text>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(1);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 1</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(2);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 2</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(3);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 3</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(4);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 4</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(5);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 5</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(6);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 6</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(7);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 7</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(8);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 8</Text>
          </View>
          <View
            style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: '100%', alignSelf: 'center' }}
            onTouchEnd={() => {
              setModalVisible(true); setConteudo(9);
            }}
          >
            <Text style={{ ...styles.textStyle, fontSize: 17, letterSpacing: 1 }}>EXERCÍCIO NR 9</Text>
          </View>
          <View style={{ height: 20 }}></View>
          <View
            style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth: 1, width: 135, alignSelf: 'center' }}
            onTouchEnd={() => {
              setCollapseVisible(false);
            }}
          >
            <Text style={styles.textStyle}>EXIBIR MENOS</Text>
          </View>
        </View>
      );
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <HeaderTerciario title='Aquecimento Dinâmico' pai='tfm/item/Tfm-1-2'/>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.div}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', borderBottomWidth: 1.5, borderColor: 'gray', paddingBottom: 10, marginBottom: 10 }}>AQUECIMENTO DINÂMICO</Text>
          <Video
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tfm-sa.appspot.com/o/video12.mp4?alt=media&token=65f64924-8041-4993-9974-ad05e9c97dd1' }}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ height: 200 }}
          />
          {
            Div1()
          }
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
    backgroundColor: 'white',
    elevation: 1,
    margin: 15,
    padding: 15
  },
  video: {
    alignSelf: 'center',
    width: 280,
    height: 200,
  },
  bt: {
    alignSelf: 'center',
    borderBottomColor: 'white',
    height: 4,
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
    backgroundColor: Colors.VermelhoClaro,
    flexDirection: "column"
  },
  container: {
    flex: 1,
    borderColor: Colors.Branco,
    backgroundColor: Colors.Branco,
  },
  header: {
    width: '100%',
    padding: 12,
    backgroundColor: Colors.VermelhoClaro,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    width: "20%",
    padding: 5,
    borderRadius: 10,
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
  openBtn: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily: 'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});