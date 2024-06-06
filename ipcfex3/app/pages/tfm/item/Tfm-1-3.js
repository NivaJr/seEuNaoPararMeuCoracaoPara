import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import fig410a from '../../../../assets/images/fig4-10-a.png';
import fig410b from '../../../../assets/images/fig4-10-b.png';
import fig410c from '../../../../assets/images/fig4-10-c.png';
import fig410d from '../../../../assets/images/fig4-10-d.png';
import fig410e from '../../../../assets/images/fig4-10-e.png';
import fig410f from '../../../../assets/images/fig4-10-f.png';
import fig410g from '../../../../assets/images/fig4-10-g.png';
import fig410h from '../../../../assets/images/fig4-10-h.png';
import fig410i from '../../../../assets/images/fig4-10-i.png';
import fig411a from '../../../../assets/images/fig4-11-a.png';
import fig411b from '../../../../assets/images/fig4-11-b.png';
import fig411c from '../../../../assets/images/fig4-11-c.png';
import fig411d from '../../../../assets/images/fig4-11-d.png';
import fig411e from '../../../../assets/images/fig4-11-e.png';
import fig412a from '../../../../assets/images/fig4-12-a.png';
import fig412b from '../../../../assets/images/fig4-12-b.png';
import fig413a from '../../../../assets/images/fig4-13-a.png';
import fig413b from '../../../../assets/images/fig4-13-b.png';
import fig413c from '../../../../assets/images/fig4-13-c.png';
import fig413d from '../../../../assets/images/fig4-13-d.png';
import fig413e from '../../../../assets/images/fig4-13-e.png';
import fig413f from '../../../../assets/images/fig4-13-f.png';
import fig413g from '../../../../assets/images/fig4-13-g.png';
import fig413h from '../../../../assets/images/fig4-13-h.png';
import fig414a from '../../../../assets/images/fig4-14-a.png';
import fig414b from '../../../../assets/images/fig4-14-b.png';
import fig414c from '../../../../assets/images/fig4-14-c.png';
import fig414d from '../../../../assets/images/fig4-14-d.png';
import fig414e from '../../../../assets/images/fig4-14-e.png';
import fig414f from '../../../../assets/images/fig4-14-f.png';
import fig414g from '../../../../assets/images/fig4-14-g.png';
import fig414h from '../../../../assets/images/fig4-14-h.png';
import fig415a from '../../../../assets/images/fig4-15-a.png';
import fig415b from '../../../../assets/images/fig4-15-b.png';
import fig415c from '../../../../assets/images/fig4-15-c.png';
import fig416a from '../../../../assets/images/fig4-16-a.png';
import fig416b from '../../../../assets/images/fig4-16-b.png';
import fig417a from '../../../../assets/images/fig4-17-a.png';
import fig417b from '../../../../assets/images/fig4-17-b.png';
import fig418a from '../../../../assets/images/fig4-18-a.png';
import fig418b from '../../../../assets/images/fig4-18-b.png';
import fig418c from '../../../../assets/images/fig4-18-c.png';
import fig418d from '../../../../assets/images/fig4-18-d.png';
import fig418e from '../../../../assets/images/fig4-18-e.png';
import fig418f from '../../../../assets/images/fig4-18-f.png';
import fig418g from '../../../../assets/images/fig4-18-g.png';
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Tfm8_3() {
  function Div1(){
    const [modalVisible, setModalVisible] = useState(false);
    const [conteudo, setConteudo] = useState(0);
    const [collapseVisible, setCollapseVisible] = useState(false);
    function Conteudo(){
      if(conteudo==1){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>CORRIDA COM CIRCUNDUÇÃO DOS BRAÇOS</Text>
                  <Text>a) Posição inicial: afastamento lateral das pernas, braços caídos ao lado 
do corpo. A tomada da posição é feita em dois tempos: no primeiro, 
braços na horizontal ao lado do corpo e afastamento lateral das 
pernas, por salto; no segundo, braços caídos ao longo do corpo (Fig 
4-10.a a 4-10.c).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig410a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.a</Text>
      <Image style={{alignSelf:'center'}} source={fig410b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.b</Text>
      <Image style={{alignSelf:'center'}} source={fig410c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.c</Text>
      <Text>b) Execução: em quatro tempos (Fig 4-10.d a 4-10.i). A contagem é feita 
toda vez que os braços passarem junto às pernas. Os braços deverão 
passar o mais próximo possível das orelhas, de acordo com a amplitude articular individual. O exercício é decomposto em dois movimentos 
distintos: inicialmente é realizada a circundução para frente. Ao término 
da circundução para frente pela tropa, o guia inicia o exercício de circundução dos braços para trás, com contagem semelhante ao primeiro 
movimento.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig410d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.d</Text>
      <Image style={{alignSelf:'center'}} source={fig410e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.e</Text>
      <Image style={{alignSelf:'center'}} source={fig410f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.f</Text>
      <Image style={{alignSelf:'center'}} source={fig410g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.g</Text>
      <Image style={{alignSelf:'center'}} source={fig410h}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.h</Text>
      <Image style={{alignSelf:'center'}} source={fig410i}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-10.i</Text>
      <Text>Obs.: Os braços permanecem esticados, passando junto ao corpo.</Text>
    </ScrollView>
        );
      }else if(conteudo==2){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>FLEXÃO DE BRAÇOS</Text>
                  <Text>a) Posição inicial: apoio de frente no solo. A tomada de posição é feita 
em dois tempos. No primeiro, grupar o corpo, unindo as pernas simultaneamente, apoiando as mãos no solo e, no segundo, estender as 
pernas para trás, deixando o corpo em posição horizontal sobre três 
apoios no solo (braço esquerdo, direito e ponta dos pés). Os pés não 
devem ser colocados um sobre o outro (Fig 4-11.a a 4-11.c).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig411a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-11.a</Text>
      <Image style={{alignSelf:'center'}} source={fig411b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-11.b</Text>
      <Image style={{alignSelf:'center'}} source={fig411c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-11.c</Text>
      <Text>b) Execução: no primeiro tempo, os cotovelos são flexionados até ultrapassarem o plano das costas e no segundo tempo são estendidos, 
voltando à posição inicial (Fig 4-11d e 4-11.e).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig411d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-11.d</Text>
      <Image style={{alignSelf:'center'}} source={fig411e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-11.e</Text>
      <Text>Obs.:{'\n'}{'\n'}1) Guia comanda “ABAIXO-ACIMA! ”;{'\n'}{'\n'}
2) Tropa executa o movimento e, em cima, responde “UM! ”;{'\n'}{'\n'}
3) Guia comanda “ABAIXO-ACIMA!”; e{'\n'}{'\n'}
4) Tropa executa o movimento e responde “DOIS! ”; e assim sucessivamente até a oitava repetição.</Text>
    </ScrollView>
        );
      }else if(conteudo==3){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>AGACHAMENTO ALTERNADO</Text>
                  <Text>a) Posição inicial: afastamento lateral das pernas, mãos nos quadris. A 
tomada da posição é feita em dois tempos: no primeiro, grupar o corpo 
e, no segundo, por salto, ficar em pé com as pernas afastadas e as 
mãos nos quadris. (Fig 4-12.a e 4-12.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig412a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-12.a</Text>
      <Image style={{alignSelf:'center'}} source={fig412b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-12.b</Text>
      <Text>b) Execução em oito tempos (a foto representa a primeira execução da 
tropa):{'\n'}{'\n'}
1) tempo 1: levar a perna esquerda à frente (Fig 4-13.a);{'\n'}{'\n'}
2) tempo 2: flexionar as pernas até aproximadamente 90° (Fig 4-13.b);{'\n'}{'\n'}
3) tempo 3: estender as pernas (Fig 4-13.c);{'\n'}{'\n'}
4) tempo 4: idêntico à posição inicial (Fig 4-13.d);{'\n'}{'\n'}
5) tempo 5: levar a perna direita à frente (Fig 4-13.e);{'\n'}{'\n'}
6) tempo 6: flexionar as pernas até aproximadamente 90° (Fig 4-13.f);{'\n'}{'\n'}
7) tempo 7: estender as pernas (Fig 4-13.g); e{'\n'}{'\n'}
8) tempo 8: idêntico à posição inicial (Fig 4-13.h).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig413a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.a</Text>
      <Image style={{alignSelf:'center'}} source={fig413b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.b</Text>
      <Image style={{alignSelf:'center'}} source={fig413c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.c</Text>
      <Image style={{alignSelf:'center'}} source={fig413d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.d</Text>
      <Image style={{alignSelf:'center'}} source={fig413e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.e</Text>
      <Image style={{alignSelf:'center'}} source={fig413f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.f</Text>
      <Image style={{alignSelf:'center'}} source={fig413g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.g</Text>
      <Image style={{alignSelf:'center'}} source={fig413h}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-13.h</Text>
      <Text>Obs.: O guia, anteriormente à execução do exercício, anuncia: “Exercício 
a 8 tempos”.</Text>
    </ScrollView>
        );
      }else if(conteudo==4){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ABDOMINAL SUPRA</Text>
                  <Text>a) Posição inicial: decúbito dorsal com as pernas flexionadas, braços 
cruzados sobre o peito e com as mãos nos ombros opostos. A tomada 
de posição é feita em dois tempos: na primeira, por salto, sentar com 
as pernas cruzadas e, no segundo, abaixar o tronco (vista frontal: Fig 
4-14.a 4-14.b; vista lateral: Fig 4-14.c e Fig 4-14.d).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig414a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.a</Text>
      <Image style={{alignSelf:'center'}} source={fig414b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.b</Text>
      <Image style={{alignSelf:'center'}} source={fig414c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.c</Text>
      <Image style={{alignSelf:'center'}} source={fig414d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.d</Text>
      <Text>b) Execução: em quatro tempos. (vista lateral: Fig 4-14.e e 4-14.f; vista 
frontal: Fig 4-14.g e 4-14.h).{'\n'}{'\n'}
1) tempo 1: flexionar o tronco até retirar as escápulas do solo;{'\n'}{'\n'}
2) tempo 2: voltar à posição inicial;{'\n'}{'\n'}
3) tempo 3: idêntico ao tempo 1; e{'\n'}{'\n'}
4) tempo 4: voltar à posição inicial.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig414e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.e</Text>
      <Image style={{alignSelf:'center'}} source={fig414f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.f</Text>
      <Image style={{alignSelf:'center'}} source={fig414g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.g</Text>
      <Image style={{alignSelf:'center'}} source={fig414h}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-14.h</Text>
      <Text>Obs.:{'\n'}{'\n'}1) Aproximar o tronco das pernas flexionadas, como se estivesse 
“enrolando-o”.{'\n'}{'\n'}
2) Aproximar o tronco das pernas flexionadas, como se estivesse 
“enrolando-o”.{'\n'}{'\n'}
3) Na fase excêntrica do movimento (retorno à posição inicial), encostar 
os ombros no solo.{'\n'}{'\n'}
4) O guia deverá executar o movimento de frente para atropa.</Text>
    </ScrollView>
        );
      }else if(conteudo==5){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>ABDOMINAL CRUZADO</Text>
                  <Text>a) Posição inicial: decúbito dorsal com as pernas flexionadas, a esquerda 
cruzada sobre a direita, o braço esquerdo estendido lateralmente e o 
direito flexionado, com a mão sobre a orelha. Tomada de posição em 
dois tempos. No primeiro, cruzar a perna esquerda sobre a direita e, 
no segundo, ao mesmo tempo em que o braço esquerdo é estendido 
lateralmente formando um ângulo aproximado de 90°
 em relação ao troco, flexionar o cotovelo direito, colocando a mão direita sobre a orelha 
(Fig 4-15.a a 4-15.c). A foto representa a execução do guia.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig415a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-15.a</Text>
      <Image style={{alignSelf:'center'}} source={fig415b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-15.b</Text>
      <Image style={{alignSelf:'center'}} source={fig415c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-15.c</Text>
      <Text>b) Execução (em quatro tempos): (Fig 4-16.a e 4-16.b).{'\n'}{'\n'}
1) tempo 1: deverá levar o cotovelo direito em direção ao joelho esquerdo flexionando o tronco até retirar a escápula do chão (não 
precisa tocar o joelho com o cotovelo);{'\n'}{'\n'}
2) tempo 2: voltar à posição inicial;{'\n'}{'\n'}
3) tempo 3: idêntico ao tempo 1; e{'\n'}{'\n'}
4) tempo 4: voltar à posição inicial.{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig416a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-16.a</Text>
      <Image style={{alignSelf:'center'}} source={fig416b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-16.b</Text>
      <Text>c) Ao término do exercício, será invertida a posição dos braços e pernas 
em dois tempos: primeiro as pernas e depois os braços, sendo executado o exercício da mesma forma para o outro lado.</Text>
    </ScrollView>
        );
      }else if(conteudo==6){
        return(
          <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>POLICHINELO</Text>
                  <Text>a) Posição inicial: posição de sentido. A tomada da posição é feita em 
dois tempos: no primeiro, elevar o tronco, flexionar as pernas e apoiar as mãos no solo, e, no segundo, por salto, ficar de pé na posição de 
sentido (Fig 4-17.a e 4-17.b).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig417a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-17.a</Text>
      <Image style={{alignSelf:'center'}} source={fig417b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-17.b</Text>
      <Text>b) Execução: abrir por salto as pernas, ao mesmo tempo bater palmas 
acima da cabeça, retornando em seguida à posição inicial (Fig 4-18.a 
a 4-18.g).{'\n'}</Text>
      <Image style={{alignSelf:'center'}} source={fig418a}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.a</Text>
      <Image style={{alignSelf:'center'}} source={fig418b}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.b</Text>
      <Image style={{alignSelf:'center'}} source={fig418c}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.c</Text>
      <Image style={{alignSelf:'center'}} source={fig418d}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.d</Text>
      <Image style={{alignSelf:'center'}} source={fig418e}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.e</Text>
      <Image style={{alignSelf:'center'}} source={fig418f}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.f</Text>
      <Image style={{alignSelf:'center'}} source={fig418g}></Image>
      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4-18.g</Text>
      <Text>Obs.: Ao término da 1ª execução, o guia comandará “ZERO! ” e a tropa prosseguirá contando, acompanhando o guia, até 30.</Text>
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
          <Text style={{color:'black', borderTopWidth:1.5, borderColor:'gray', paddingTop:25, marginTop:25}}>Os botões 1 a 6 a seguir indicam a ordem dos exercícios de aquecimento estático.</Text>
          <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(1);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 1</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(2);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 2</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(3);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 3</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(4);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 4</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(5);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 5</Text>
              </View>
              <View
                style={{ ...styles.openBtn, backgroundColor: Colors.VerdeEscuro, borderWidth:1, width:'100%', alignSelf:'center' }}
                onTouchEnd={() => {
                  setModalVisible(true);setConteudo(6);
                }}
              >
                <Text style={{...styles.textStyle, fontSize:17, letterSpacing:1}}>EXERCÍCIO NR 6</Text>
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
          <HeaderTerciario title='Fase de Aquecimento Estático' pai='tfm/item/Tfm-1' />
          <ScrollView style={{flex:1}}>
            <View style={styles.div}>
                  <Text style={{textAlign:'center', fontWeight:'bold', borderBottomWidth:1.5, borderColor:'gray', paddingBottom:10, marginBottom:10}}>FASE DE AQUECIMENTO ESTÁTICO</Text>
                  <Text>Tomada do dispositivo – o comandante coloca a tropa de frente 
para o guia de modo que a largura seja maior que a profundidade. Para 
isso são dados os comandos:{'\n'}</Text>
<Text>a) “BASE O SD BRASIL! ”. O militar levanta o braço esquerdo, com o 
punho fechado, e repete o seu nome “SD BRASIL”. Em seguida o comandante comanda “ABRIR DISTÂNCIAS E INTERVALOS! ”. A tropa 
toma a posição de sentido e somente a coluna e a fileira do homem 
base levantam os braços até que as pontas dos dedos das mãos 
toquem de leve as dos militares vizinhos, as demais alinham com a 
base aumentando as distâncias e os intervalos. Após a distância ser 
estabelecida, os militares tomam a posição de descansar{'\n'}{'\n'}b) “FILEIRAS, NUMERAR! ” (todos da 1a
 fileira tomam a posição de sentido, erguem o braço esquerdo com o punho fechado e gritam “UM”. Após 
esse procedimento, retornam à posição de sentido e, depois, à posição 
de descansar. Assim que a 1a
 fileira retornar à posição de descansar, a 
2a
 fileira executará o mesmo procedimento da 1a
 fileira, gritando “DOIS”. 
E assim sucessivamente, gritando o número correspondente ao da sua 
fileira, até a última fileira terminar na posição de descansar);{'\n'}{'\n'}c) “SENTIDO!”;{'\n'}{'\n'}d) “FILEIRAS PARES (ÍMPARES), UM PASSO À DIREITA (ESQUERDA). 
MARCHE!”;{'\n'}{'\n'}e) “DESCANSAR!”; e{'\n'}{'\n'}f) “EXTREMIDADES, FRENTE PARA O GUIA! ” A esse comando, por 
salto, as extremidades fazem frente para o guia.{'\n'}{'\n'}Execução dos exercícios – o guia comanda: “POSIÇÃO 
INICIAL! ” e toma a posição de sentido. A tropa imita o guia. A partir desse momento, o guia anuncia o exercício e a tropa repete os movimentos 
executados pelo guia após o término da contagem. Nos exercícios unilaterais a tropa inicia pelo seu lado esquerdo, dessa forma, o guia deverá 
iniciar pelo lado direito.</Text>
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