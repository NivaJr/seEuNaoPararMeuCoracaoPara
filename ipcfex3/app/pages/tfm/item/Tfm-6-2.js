import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import fig91a from '../../../../assets/images/fig9-1-a.png';
import fig91b from '../../../../assets/images/fig9-1-b.png';
import fig92a from '../../../../assets/images/fig9-2-a.png';
import fig92b from '../../../../assets/images/fig9-2-b.png';
import fig92c from '../../../../assets/images/fig9-2-c.png';
import fig92d from '../../../../assets/images/fig9-2-d.png';
import fig93a from '../../../../assets/images/fig9-3-a.png';
import fig93b from '../../../../assets/images/fig9-3-b.png';
import fig94a from '../../../../assets/images/fig9-4-a.png';
import fig94b from '../../../../assets/images/fig9-4-b.png';
import fig95a from '../../../../assets/images/fig9-5-a.png';
import fig95b from '../../../../assets/images/fig9-5-b.png';
import fig96a from '../../../../assets/images/fig9-6-a.png';
import fig96b from '../../../../assets/images/fig9-6-b.png';
import fig96c from '../../../../assets/images/fig9-6-c.png';
import fig96d from '../../../../assets/images/fig9-6-d.png';
import fig97a from '../../../../assets/images/fig9-7-a.png';
import fig97b from '../../../../assets/images/fig9-7-b.png';
import fig98a from '../../../../assets/images/fig9-8-a.png';
import fig98b from '../../../../assets/images/fig9-8-b.png';
import Footer from '../../../../components/Footer';
import HeaderTerciario from '../../../../components/HeaderTerciario';

export default function Tfm9_2() {
  function Div1(){
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    function Conteudo(){
      if(conteudo==1){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULO TRAPÉZIO SUPERIOR</Text>
                  <Text>apoiar as mãos unidas e dedos entrelaçados na região superior da cabeça (próxima ao topo), empurrar a cabeça para frente levando o queixo em direção ao tórax. (Fig 9-1.a e Fig 9-1.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig91a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-1.a</Text>
      <Image style={{alignSelf:'center'}} source={fig91b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-1.b</Text>
    </ScrollView>
        );
      }else if(conteudo==2){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>CADEIA LATERAL</Text>
                  <Text>posicionar uma perna esticada por trás do corpo afastando-a lateralmente, manter a perna da frente em semiflexão e inclinar o corpo para o mesmo lado da perna de trás. Ao término, inverter o lado (Fig 9-2.a e Fig 9-2.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig92a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-2.a</Text>
      <Image style={{alignSelf:'center'}} source={fig92b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-2.b</Text>
      <Text>Obs: Pode ser realizado com ênfase na região dorsal – segurando o cotovelo esquerdo com a mão direita, puxar o braço esquerdo por trás da cabeça, inclinando tronco para direita. Ao término, inverter o lado (Fig 9-2.c e 9-2.d).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig92c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-2.c</Text>
      <Image style={{alignSelf:'center'}} source={fig92d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-2.d</Text>
    </ScrollView>
        );
      }else if(conteudo==3){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULO TRÍCEPS BRAQUIAL</Text>
                  <Text>de pé, com o corpo ereto, segurar o cotovelo esquerdo com a mão direita e puxar o braço esquerdo por trás da cabeça. Manter a cabeça alinhada e olhar para frente. Ao término, inverter o lado (Fig 9-3.a e Fig 9-3.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig93a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-3.a</Text>
      <Image style={{alignSelf:'center'}} source={fig93b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-3.b</Text>
    </ScrollView>
        );
      }else if(conteudo==4){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULOS FLEXORES DE PUNHO</Text>
                  <Text>de pé, corpo ereto, braço direto estendido e à frente do corpo com a mão espalmada (pontas dos dedos apontando para cima). Envolver palma da mão e dedos (flanges proximais) com a mão esquerda, puxar para trás. Ao término, inverter o lado (Fig 9-4.a e Fig 9-4.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig94a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-4.a</Text>
      <Image style={{alignSelf:'center'}} source={fig94b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-4.b</Text>
    </ScrollView>
        );
      }else if(conteudo==5){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULOS EXTENSORES DE PUNHO</Text>
                  <Text>de pé, com o corpo ereto, braço direto estendido e à frente do corpo mão espalmada (pontas dos dedos apontando para baixo), com a mão esquerda puxar a direita na direção do tronco. Ao término, inverter o lado (Fig 9-5.a e Fig 9-5.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig95a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-5.a</Text>
      <Image style={{alignSelf:'center'}} source={fig95b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-5.b</Text>
    </ScrollView>
        );
      }else if(conteudo==6){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULO PEITORAL</Text>
                  <Text>1ª Forma – de pé, braços estendidos à retaguarda do corpo, entrelaçar os dedos, elevar os braços afastando as mãos do tronco (Fig 9-6.a e Fig 9-6.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig96a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-6.a</Text>
      <Image style={{alignSelf:'center'}} source={fig96b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-6.b</Text>
      <Text>2ª Forma – sentado, pernas esticadas, braços estendidos à retaguarda do corpo, posicionar as mãos paralelamente abertas (com as pontas dos dedos apontados para trás), aproximar uma da outra e afastá-las o máximo possível do corpo (Fig 9-6.c e Fig 9-6.d).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig96c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-6.c</Text>
      <Image style={{alignSelf:'center'}} source={fig96d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-6.d</Text>
    </ScrollView>
        );
      }else if(conteudo==7){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>CADEIA ANTERIOR</Text>
                  <Text>deitado de frente para o solo (decúbito ventral), apoiar as mãos espalmadas no chão com os dedos apontados para frente, inclinar o tronco para trás (hiperestender a coluna) lentamente, levantando a cabeça e o tórax do chão (Fig 9-7.a e Fig 9-7.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig97a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-7.a</Text>
      <Image style={{alignSelf:'center'}} source={fig97b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-7.b</Text>
      <Text>Obs: as mãos podem ser posicionadas próximas da linha dos quadris e a cabeça voltada para frente, de acordo com a capacidade de cada indivíduo.{'\n'}</Text>
    </ScrollView>
        );
      }else if(conteudo==8){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>LOMBAR</Text>
                  <Text>de pé, pés paralelos, pernas afastadas na largura do tronco e joelhos semifletidos, flexionar o tronco à frente mantendo braços e cervical relaxados (Fig 9-8.a e Fig 9-8.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig98a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-8.a</Text>
      <Image style={{alignSelf:'center'}} source={fig98b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-8.b</Text>
    </ScrollView>
        );
      }
    }
      return(
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
                      style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:90 }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>VOLTAR</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
          <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(1);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>TRAPÉZIO SUPERIOR</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(2);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>CADEIA LATERAL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(3);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>TRÍCEPS BRAQUIAL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(4);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FLEXORES PUNHO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(5);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXTENSORES PUNHO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(6);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>PEITORAL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(7);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>CADEIA ANTERIOR</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(8);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>LOMBAR</Text>
              </View>
              <View style={{height:20}}></View>
        </View>
      );
  }
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <HeaderTerciario title='Alongamento de Membros Superiores' pai='tfm/item/Tfm-6' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ALONGAMENTO DE MEMBROS SUPERIORES</Text>
                  {
                    Div1()
                  }
                  </View>
              <View style={{height:20}}></View>
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
    backgroundColor:'white',
    elevation: 1,
    margin:15,
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
    backgroundColor: Colors.VerdeClaro,
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
  openBtn: {
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 10,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontFamily:'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});