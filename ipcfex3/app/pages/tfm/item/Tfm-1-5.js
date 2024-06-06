import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import fig419 from '../../../../assets/images/fig4-19.png';
import fig420 from '../../../../assets/images/fig4-20.png';
import fig421a from '../../../../assets/images/fig4-21-a.png';
import fig421b from '../../../../assets/images/fig4-21-b.png';
import fig422a from '../../../../assets/images/fig4-22-a.png';
import fig422b from '../../../../assets/images/fig4-22-b.png';
import fig423a from '../../../../assets/images/fig4-23-a.png';
import fig423b from '../../../../assets/images/fig4-23-b.png';
import fig424a from '../../../../assets/images/fig4-24-a.png';
import fig424b from '../../../../assets/images/fig4-24-b.png';
import fig425a from '../../../../assets/images/fig4-25-a.png';
import fig425b from '../../../../assets/images/fig4-25-b.png';
import fig426a from '../../../../assets/images/fig4-26-a.png';
import fig426b from '../../../../assets/images/fig4-26-b.png';
import fig427a from '../../../../assets/images/fig4-27-a.png';
import fig427b from '../../../../assets/images/fig4-27-b.png';
import fig428 from '../../../../assets/images/fig4-28.png';
import fig429 from '../../../../assets/images/fig4-29.png';
import fig430a from '../../../../assets/images/fig4-30-a.png';
import fig430b from '../../../../assets/images/fig4-30-b.png';
import fig431a from '../../../../assets/images/fig4-31-a.png';
import fig431b from '../../../../assets/images/fig4-31-b.png';
import fig432a from '../../../../assets/images/fig4-32-a.png';
import fig432b from '../../../../assets/images/fig4-32-b.png';
import fig433a from '../../../../assets/images/fig4-33-a.png';
import fig433b from '../../../../assets/images/fig4-33-b.png';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm8_5() {
  function Div1(){
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    const [collapseVisible, setCollapseVisible] = useState(false);
    function Conteudo(){
      if(conteudo==1){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>DORSAL</Text>
                  <Text>segurando o cotovelo esquerdo com a mão direita, puxar o 
braço esquerdo por trás da cabeça, inclinando tronco para direita. Ao 
terminar o tempo, inverter a posição das mãos (Fig 4-19).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig419}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-19</Text>
    </ScrollView>
        );
      }else if(conteudo==2){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>PEITORAL</Text>
                  <Text>entrelaçar as mãos à retaguarda e estender os braços, elevando-o (Fig 4-20).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig420}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-20</Text>
    </ScrollView>
        );
      }else if(conteudo==3){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ANTERIOR DA COXA</Text>
                  <Text>de pé, apoiado na perna direita, segurar o 
dorso do pé esquerdo com a mão esquerda, flexionando a perna e 
aproximando o calcanhar dos glúteos, procurando levar a coxa para a 
retaguarda. Ao terminar o tempo, inverter as pernas (Fig 4-21.a). Nesse 
exercício, como sugestão, pode-se buscar uma posição de equilíbrio 
com o apoio mútuo do militar ao lado (Fig 4-21.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig421a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-21.a</Text>
      <Image style={{alignSelf:'center'}} source={fig421b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-21.b</Text>
      <Text>Obs.: Não puxar o pé para cima para não forçar a articulação do joelho. 
Após segurar o pé, o movimento deverá ser executado puxando o pé para 
trás, projetando a coxa para o plano posterior, de acordo com o nível de 
flexibilidade e amplitude articular individual.{'\n'}</Text>
    </ScrollView>
        );
      }else if(conteudo==4){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>GLÚTEOS</Text>
                  <Text>sentado, cruzar a perna esquerda (flexionada) sobre a direita 
(estendida), abraçando a perna esquerda e trazendo o joelho esquerdo 
em direção ao ombro direito (Fig 4-22.a e Fig 4-22.b). Ao terminar o 
tempo, inverter as pernas.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig422a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-22.a</Text>
      <Image style={{alignSelf:'center'}} source={fig422b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-22.b</Text>
    </ScrollView>
        );
      }else if(conteudo==5){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ADUTORES</Text>
                  <Text>sentado, com o tronco ereto, as solas dos pés unidas e com 
as mãos segurando os pés, fazer uma abdução das pernas buscando aproximar a lateral das pernas do solo, sem executar balanço das 
pernas (Fig 4-23.a e Fig 4-23.b).{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig423a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-23.a</Text>
      <Image style={{alignSelf:'center'}} source={fig423b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-23.b</Text>
      <Text>Obs.: Este exercício, caso o terreno dificulte a execução, pode ser realizado de outra maneira, com o militar em pé, pernas afastadas lateralmente, 
inclinando-se ligeiramente para a direita, ao mesmo tempo que flexiona a 
perna direita e encosta as mãos no chão, forçando uma abdução da perna 
esquerda (Fig 4-24.a e Fig 4-24.b). Ao terminar o tempo, inverter a direção 
de inclinação.{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig424a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-24.a</Text>
      <Image style={{alignSelf:'center'}} source={fig424b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-24.b</Text>
    </ScrollView>
        );
      }else if(conteudo==6){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>POSTERIOR DA COXA</Text>
                  <Text>sentado, com a perna direita flexionada de modo 
que o joelho fique voltado para a direita e a perna esquerda estendida, 
segurar a perna esquerda com ambas as mãos e flexionar o tronco em direção à coxa esquerda, como se projetasse o quadril à frente (Fig 
4-25.a e Fig 25.b). Ao terminar o tempo, inverter as pernas.{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig425a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-25.a</Text>
      <Image style={{alignSelf:'center'}} source={fig425b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-25.b</Text>
      <Text>Obs.: Este exercício, caso o terreno dificulte a execução, pode ser realizado de outra maneira, com o militar em pé, pernas cruzadas com a direita 
à frente da esquerda flexionando o tronco à frente das coxas (Fig 4-26.a e 
4-26.b). Ao terminar o tempo, inverter as pernas.{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig426a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-26.a</Text>
      <Image style={{alignSelf:'center'}} source={fig426b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-26.b</Text>
    </ScrollView>
        );
      }else if(conteudo==7){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>LOMBAR</Text>
                  <Text>o militar, em pé, pernas afastadas e fletidas, deve flexionar o 
tronco para frente (Fig 4-27.a e Fig 27.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig427a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-27.a</Text>
      <Image style={{alignSelf:'center'}} source={fig427b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-27.b</Text>
    </ScrollView>
        );
      }else if(conteudo==8){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ILIO-PSOAS</Text>
                  <Text>em pé, perna direita à frente, com joelho flexionado aproximadamente 90°, perna esquerda à retaguarda com o joelho e a parte 
dorsal do pé tocando levemente o solo. Deve-se procurar projetar o 
quadril para frente de forma lenta e gradual. O tronco deve permanecer 
na posição ereta (Fig 4-28).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig428}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-28</Text>
      <Text>Obs.: Caso a individualidade biológica permita, dependendo do terreno, 
o indivíduo poderá adotar uma posição semelhante à anterior, porém retirando o apoio do joelho esquerdo do chão e colocando o peso do corpo na 
parte plantar anterior do pé esquerdo e no pé direito (Fig 4-29).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig429}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-29</Text>
    </ScrollView>
        );
      }else if(conteudo==9){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>GASTROCNÊMIO</Text>
                  <Text>utilizando-se de um ressalto no terreno como meio 
auxiliar, adotar a seguinte posição: pise na elevação com a parte anterior do pé esquerdo, desça o peso do corpo até sentir uma leve tensão 
na musculatura, o joelho esquerdo deverá estar estendido e o joelho 
direito semiflexionado (Fig 4-30.a e Fig 4-30.b).{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig430a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-30.a</Text>
      <Image style={{alignSelf:'center'}} source={fig430b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-30.b</Text>
      <Text>Obs.: Caso o terreno não possibilite a utilização de ressaltos, o indivíduo 
poderá adotar a seguinte posição: em pé, colocar a perna esquerda estendida para trás, inclinar o corpo ereto ligeiramente para frente flexionando o 
joelho direito (Fig 4-31.a e Fig 4-31.b).{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig431a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-31.a</Text>
      <Image style={{alignSelf:'center'}} source={fig431b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-31.b</Text>
    </ScrollView>
        );
      }else if(conteudo==10){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>SÓLEO</Text>
                  <Text>em pé e de frente para uma parede que esteja na altura do 
peito, colocar uma perna semiflexionada para trás, inclinar o corpo 
ereto ligeiramente para frente flexionando o joelho da perna contrária 
(Fig 4-32.a e Fig 4-32.b).{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig432a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-32.a</Text>
      <Image style={{alignSelf:'center'}} source={fig432b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-32.b</Text>
      <Text>Obs.: Caso não haja apoio no terreno, esse exercício pode ser executado 
realizando uma flexão do tronco, perna a ser alongada à frente, joelho 
ligeiramente fletido, puxar a ponta do pé no sentido da perna (dorsiflexão) 
(Fig 4-33.a e Fig 4-33.b).{'\n'}</Text>
<Image style={{alignSelf:'center'}} source={fig433a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-33.a</Text>
      <Image style={{alignSelf:'center'}} source={fig433b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-33.b</Text>
    </ScrollView>
        );
      }
    }
    if(collapseVisible==false){
      return(
          <View
                style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:120, alignSelf:'center' }}
                onTouchEnd={() => {
                  setCollapseVisible(true);
                }}
              >
                <Text style={styles.textStyle}>EXIBIR MAIS</Text>
              </View>
      );
    }else{
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
          <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25}}>Caminhada Lenta{'\n'}{'\n'}Caso a sessão seja de treinamento da aptidão cardiorrespiratória, aconselha-se diminuir a intensidade do exercício até atingir a 
caminhada.{'\n'}{'\n'}É aconselhável respirar naturalmente, conforme a necessidade 
individual do organismo.{'\n'}{'\n'}Sugere-se abrir intervalos e distâncias, entre os militares, 
superior a dois passos.{'\n'}{'\n'}A frequência cardíaca deverá ser aferida em duas ocasiões, 
imediatamente após o término da atividade principal e 90 s depois.</Text>
          <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25}}>Exercícios de Alongamento{'\n'}{'\n'}Alongamento – os exercícios de alongamento se destinam a 
diminuir a tensão dos grupos musculares. A pouca flexibilidade tem sido 
apontada como um dos fatores que contribuem para a diminuição da capacidade funcional de realizar atividades cotidianas, sendo os exercícios 
diários de alongamento considerados como de fundamental importância 
para manutenção da amplitude de movimento. Essa fase terá uma duração de aproximadamente 5 min. Os exercícios serão executados por 
imitação ao guia e deverão ser observados os seguintes itens:{'\n'}{'\n'}
a) alongar a musculatura de uma forma lenta e gradual até chegar ao 
ponto de leve desconforto;{'\n'}{'\n'}
b) não fazer balanceios, pois, sempre que se estirar em excesso, haverá 
uma ação contrária, um reflexo de contração, gerando encurtamento da musculatura, diminuindo, assim, a efetividade do exercício de 
alongamento;{'\n'}{'\n'}
c) permanecer, pelo menos, 30 s em cada posição; e{'\n'}{'\n'}
d) respirar naturalmente.{'\n'}{'\n'}
Obs.: Em clima frio, deve-se realizar o alongamento em locais cobertos 
que minimizem a perda de calor. Caso o OTFM ou o Cmt da fração julgue 
necessário, essa atividade poderá ser suspensa.{'\n'}{'\n'}{'\n'}Exercícios (as fotos representam a primeira execução da 
tropa).</Text>
          <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(1);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>DORSAL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(2);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>PEITORAL</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(3);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>ANTERIOR DA COXA</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(4);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>GLÚTEOS</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(5);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>ADUTORES</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(6);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>POSTERIOR DA COXA</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(7);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>LOMBAR</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(8);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>ÍLIO-PSOAS</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(9);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>GASTROCNÊMIO</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(10);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>SÓLEO</Text>
              </View>
              <View style={{height:20}}></View>
          <View
                style={{ ...styles.openButton, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:135, alignSelf:'center' }}
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
          <StatusBar hidden={true} />
          <HeaderTerciario title='Fase de Volta à Calma' pai='tfm/item/Tfm-1' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>FASE DE VOLTA À CALMA</Text>
                  <Text>É a fase da sessão em que se inicia a recuperação do organismo 
após o trabalho principal.{'\n'}{'\n'}Consiste em uma atividade suave que tem por finalidade permitir 
o retorno gradual do ritmo respiratório e da frequência cardíaca aos níveis 
normais.{'\n'}{'\n'}É fundamental que essa atividade seja realizada de maneira 
que a intensidade sofra um decréscimo progressivo, evitando-se paradas 
bruscas.{'\n'}{'\n'}A volta à calma é composta das seguintes atividades:{'\n'}{'\n'}
a) caminhada lenta; e{'\n'}{'\n'}
b) exercícios de alongamento.{'\n'}</Text>
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