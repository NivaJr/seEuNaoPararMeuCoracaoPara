import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import fig99a from '../../../../assets/images/fig9-9-a.png';
import fig99b from '../../../../assets/images/fig9-9-b.png';
import fig99c from '../../../../assets/images/fig9-9-c.png';
import fig99d from '../../../../assets/images/fig9-9-d.png';
import fig910a from '../../../../assets/images/fig9-10-a.png';
import fig910b from '../../../../assets/images/fig9-10-b.png';
import fig910c from '../../../../assets/images/fig9-10-c.png';
import fig910d from '../../../../assets/images/fig9-10-d.png';
import fig910e from '../../../../assets/images/fig9-10-e.png';
import fig910f from '../../../../assets/images/fig9-10-f.png';
import fig910g from '../../../../assets/images/fig9-10-g.png';
import fig910h from '../../../../assets/images/fig9-10-h.png';
import fig911a from '../../../../assets/images/fig9-11-a.png';
import fig911b from '../../../../assets/images/fig9-11-b.png';
import fig911c from '../../../../assets/images/fig9-11-c.png';
import fig911d from '../../../../assets/images/fig9-11-d.png';
import fig912a from '../../../../assets/images/fig9-12-a.png';
import fig912b from '../../../../assets/images/fig9-12-b.png';
import fig912c from '../../../../assets/images/fig9-12-c.png';
import fig913a from '../../../../assets/images/fig9-13-a.png';
import fig913b from '../../../../assets/images/fig9-13-b.png';
import fig913c from '../../../../assets/images/fig9-13-c.png';
import fig913d from '../../../../assets/images/fig9-13-d.png';
import fig913e from '../../../../assets/images/fig9-13-e.png';
import fig913f from '../../../../assets/images/fig9-13-f.png';
import fig913g from '../../../../assets/images/fig9-13-g.png';
import fig914a from '../../../../assets/images/fig9-14-a.png';
import fig914b from '../../../../assets/images/fig9-14-b.png';
import fig914c from '../../../../assets/images/fig9-14-c.png';
import fig914d from '../../../../assets/images/fig9-14-d.png';
import fig914e from '../../../../assets/images/fig9-14-e.png';
import fig914f from '../../../../assets/images/fig9-14-f.png';
import fig914g from '../../../../assets/images/fig9-14-g.png';
import fig914h from '../../../../assets/images/fig9-14-h.png';
import fig915a from '../../../../assets/images/fig9-15-a.png';
import fig915b from '../../../../assets/images/fig9-15-b.png';
import fig915c from '../../../../assets/images/fig9-15-c.png';
import fig915d from '../../../../assets/images/fig9-15-d.png';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm9_3() {
  function Div1(){
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    function Conteudo(){
      if(conteudo==1){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULOS EXTENSORES DO JOELHO</Text>
                  <Text>1ª Forma – de pé com o peso do corpo apoiado na perna esquerda, manter o joelho direito flexionado e com a mão direita puxar o pé em direção ao corpo. Posicionar a mão no dorso do pé ou no tornozelo. Ao término, inverter os lados (Fig 9-9.a e Fig 9-9.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig99a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-9.a</Text>
      <Image style={{alignSelf:'center'}} source={fig99b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-9.b</Text>
      <Text>Obs: Pode-se buscar uma posição de equilíbrio com o apoio mútuo do militar ao lado, conforme demonstrado no cap IV, Fig 4-21.b e Fig 21.c, deste manual.{'\n'}{'\n'}2ª Forma – usando um colchonete ou em terreno adequado, posicionar-se com o joelho dir no solo, segurar a perna direita com a mão direita colocada no dorso do pé ou no tornozelo, apoiar a perna esq a frente. Manter o corpo ereto e apoiar a mão esquerda sobre o joelho esquerdo para facilitar o equilíbrio. Alongar mantendo a perna direita estática e inclinando lentamente o corpo a frente. Ao término, inverter os lados (Fig 9-9.c e Fig 9-9.d).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig99c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-9.c</Text>
      <Image style={{alignSelf:'center'}} source={fig99d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-9.d</Text>
    </ScrollView>
        );
      }else if(conteudo==2){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULOS FLEXORES DO JOELHO</Text>
                  <Text>1ª Forma – de pé, cruzar as pernas e executar uma flexão de tronco para alongar a perna de trás. As mãos podem permanecer a frente do corpo (Fig 9-10.a e Fig 9-10.b) ou segurando a perna da frente na região próxima ao tornozelo (Fig 9-10.c e Fig 9-10.d). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig910a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.a</Text>
      <Image style={{alignSelf:'center'}} source={fig910b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.b</Text>
      <Image style={{alignSelf:'center'}} source={fig910c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.c</Text>
      <Image style={{alignSelf:'center'}} source={fig910d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.d</Text>
      <Text>2ª Forma – sentado com a perna esquerda a frente, manter a coluna ereta, posicionar as mãos ao lado do corpo, flexione o tronco a frente até sentir tensão na parte posterior da coxa (Fig 9-10.e e Fig 9-10.f). As mãos podem permanecer segurando a perna na região próxima ao tornozelo (Fig 9-10.g e Fig 9-10.h). Ao término, inverter a posição das pernas.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig910e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.e</Text>
      <Image style={{alignSelf:'center'}} source={fig910f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.f</Text>
      <Image style={{alignSelf:'center'}} source={fig910g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.g</Text>
      <Image style={{alignSelf:'center'}} source={fig910h}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-10.h</Text>
    </ScrollView>
        );
      }else if(conteudo==3){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>FLEXORES DO QUADRIL</Text>
                  <Text>1ª Forma – de pé, posicionar uma perna à frente e a outra para trás com leve flexão do joelho, mover o quadril para frente mantendo o tronco ereto. O alongamento pode ser intensificado movendo o joelho da perna de trás em direção ao solo (Fig 9-11.a e Fig 9-11.b). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig911a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-11.a</Text>
      <Image style={{alignSelf:'center'}} source={fig911b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-11.b</Text>
      <Text>Obs: Não posicione o joelho da perna da frente (perna direita, Fig 9-11.b) à frente do tornozelo, para não impedir o alongamento no quadril.{'\n'}{'\n'}2ª Forma – posicionar-se com o joelho da perna que está sendo alongada (perna de trás) relaxada e apoiado no solo, inclinar o corpo à frente (Fig 9-11.c e Fig 9-11.d). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig911c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-11.c</Text>
      <Image style={{alignSelf:'center'}} source={fig911d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-11.d</Text>
    </ScrollView>
        );
      }else if(conteudo==4){
        return(
            <ScrollView>
              <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULOS ADUTORES QUADRIL</Text>
                    <Text>1ª Forma – de pé, afastar as pernas para além da largura dos ombros, abaixar o corpo para o lado dobrando o joelho direito, mantendo o joelho esquerdo sempre estendido. Apoiar as mãos no joelho para manter o equilíbrio (Fig 9-12.a). Pode ser executado com maior amplitude e apoio das mãos no solo (Fig 9-12.b). Ao término, inverter os lados.{'\n'}</Text>
        <Image style={{alignSelf:'center'}} source={fig912a}></Image>
        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-12.a</Text>
        <Image style={{alignSelf:'center'}} source={fig912b}></Image>
        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-12.b</Text>
        <Text>2ª Forma – sentado, puxar os calcanhares para próximo do corpo, empurrar levemente os joelhos para baixo, de acordo com o nível de flexibilidade e amplitude articular individual (Fig 9-12.c).{'\n'}</Text>
        <Image style={{alignSelf:'center'}} source={fig912c}></Image>
        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-12.c</Text>
      </ScrollView>
        );
      }else if(conteudo==5){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>MÚSCULO SÓLEO</Text>
                  <Text>de pé, uma perna a frente da outra, joelhos semifletidos, inclinar levemente o quadril e descarregar o peso do corpo na perna de trás mantendo o calcanhar apoiado no solo. (Fig 9-13.a; Fig 9-13.b e Fig 9-13.c). A tensão deve ser percebida na região abaixo da panturrilha. Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig913a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.a</Text>
      <Image style={{alignSelf:'center'}} source={fig913b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.b</Text>
      <Image style={{alignSelf:'center'}} source={fig913c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.c</Text>
      <Text>2ª Forma – utilizando auxílio de um ressalto ou degrau no terreno para apoiar o pé (Fig 9-13.d, Fig 9-13.e, Fig 9-13.f e Fig 9-13.g). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig913d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.d</Text>
      <Image style={{alignSelf:'center'}} source={fig913e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.e</Text>
      <Image style={{alignSelf:'center'}} source={fig913f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.f</Text>
      <Image style={{alignSelf:'center'}} source={fig913g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-13.g</Text>
    </ScrollView>
        );
      }else if(conteudo==6){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>GASTROCNÊMIOS</Text>
                  <Text>1ª Forma – de pé, afastar as pernas mantendo uma a frente com o joelho semifletido e a outra estendida, manter os calcanhares no solo, mantendo o tronco ereto, executar uma leve inclinação a frente (Fig 9-14.a e Fig 9-14.b). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig914a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.a</Text>
      <Image style={{alignSelf:'center'}} source={fig914b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.b</Text>
      <Text>Obs: Pode ser executado em pé e de frente para um anteparo ou parede (Fig 9-14.c e Fig 9-14.d), ou de pé com auxílio de um ressalto ou degrau (Fig 9-14.e e Fig 9-14.f).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig914c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.c</Text>
      <Image style={{alignSelf:'center'}} source={fig914d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.d</Text>
      <Image style={{alignSelf:'center'}} source={fig914e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.e</Text>
      <Image style={{alignSelf:'center'}} source={fig914f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.f</Text>
      <Text>2ª Forma – sentar, estender a perna esquerda, projetar o corpo a frente e puxar a ponta do pé para trás (Fig 9-14.g e Fig 9-14.h). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig914g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.g</Text>
      <Image style={{alignSelf:'center'}} source={fig914h}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-14.h</Text>
    </ScrollView>
        );
      }else if(conteudo==7){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>GLÚTEOS</Text>
                  <Text>1ª Forma – sentar, estender a perna esquerda, cruzar a perna direita sobre a esquerda com o joelho flexionado e com o braço esquerdo, puxar o joelho direito em direção ao ombro esquerdo (Fig 9-15.a e Fig 9-15.b). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig915a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-15.a</Text>
      <Image style={{alignSelf:'center'}} source={fig915b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-15.b</Text>
      <Text>2ª Forma – sentar sobre a perna esquerda flexionada, manter as mãos apoiadas no solo, a perna direita estendida para trás e relaxada (Fig 9-15.c e Fig 9-15.d). Ao término, inverter os lados.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig915c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-15.c</Text>
      <Image style={{alignSelf:'center'}} source={fig915d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9-15.d</Text>
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
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXTENSORES JOELHO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(2);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FLEXORES JOELHO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(3);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>FLEXORES QUADRIL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(4);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>ADUTORES QUADRIL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(5);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>SÓLEO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(6);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>GASTROCNÊMIOS</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(7);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>GLÚTEOS</Text>
              </View>
              <View style={{height:20}}></View>
        </View>
      );
  }
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <HeaderTerciario title='Alongamento de Membros Inferiores' pai='tfm/item/Tfm-6' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ALONGAMENTO DE MEMBROS INFERIORES</Text>
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