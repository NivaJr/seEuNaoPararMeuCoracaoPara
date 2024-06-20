import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import EstiloComum from "../../EstiloComum";
import Figura10 from "../../../../assets/images/figura10.png"
import Figura11 from "../../../../assets/images/figura11.png"
import Figura12 from "../../../../assets/images/figura12.png"
import Figura13 from "../../../../assets/images/figura13.png"
import Figura14 from "../../../../assets/images/figura14.png"
import Figura15 from "../../../../assets/images/figura15.png"
import Figura16 from "../../../../assets/images/figura16.png"
import HeaderTerciario from '../../../../components/HeaderTerciario';
import Footer from '../../../../components/Footer';

export default function Saude1_1() {
  const [modalVisible, setModalVisible] = useState(false);
  const [conteudo,setConteudo]=useState(0);
    function Conteudo(){
      if(conteudo==1){
        return(
          <View>
            <StatusBar hidden={true} />
            <Text style={{...styles.modalText}}>SOBRE{"\n"}</Text>
                      <Text>Para as medidas das circunferências é usada uma fita métrica constituída de material inextensível que permita aplicar pressão constante sobre a superfície da pele durante toda medição, devendo ter um ponto de encaixe para registro da medida e leitura. Tal equipamento deve ter capacidade de 200 centímetros e graduação de meio centímetro. O avaliador inicia a medida pela CC, seguido pela CA e CQ (Fig 6).{'\n'}
                      </Text>
                      <View style={{width:250, height:130, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:130}} source={Figura10}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 6</Text>
          </View>
        );
      }else if(conteudo==2){
        return(
          <View>
            <StatusBar hidden={true} />
            <Text style={{...styles.modalText}}>CIRCUNFERÊNCIA DA CINTURA (CC){"\n"}</Text>
                      <Text>A circunferência é medida com o avaliado posicionado de frente para o avaliador, com os pés descalços e unidos, com o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente), braços estendidos ao lado do corpo e abdômen relaxado. O avaliador coloca a fita em um plano horizontal, no ponto coincidente com a distância média entre a última costela e a crista-ilíaca. A medida é obtida ao final de uma expiração normal sem que a fita comprima a pele (Fig 7 e 8).{'\n'}
                      </Text>
                      <View style={{width:250, height:150, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:150}} source={Figura11}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 7</Text>
                      <View style={{width:250, height:150, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:150}} source={Figura12}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 8</Text>
          </View>
        );
      }else if(conteudo==3){
        return(
          <View>
            <Text style={{...styles.modalText}}>CIRCUNFERÊNCIA ABDOMINAL (CA){"\n"}</Text>
                      <Text>A circunferência é medida com o avaliado posicionado de frente para o avaliador, com os pés descalços e unidos, com o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente), braços estendidos ao lado do corpo e abdômen relaxado. O avaliador coloca a fita em um plano horizontal, no nível da cicatriz umbilical. A medida é obtida ao final de uma expiração normal sem que a fita comprima a pele (Fig 9 e 10).{'\n'}
                      </Text>
                      <View style={{width:250, height:150, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:150}} source={Figura13}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 9</Text>
                      <View style={{width:250, height:150, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:150}} source={Figura14}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 10</Text>
          </View>
        );
      }else if(conteudo==4){
        return(
          <View>
            <Text style={{...styles.modalText}}>CIRCUNFERÊNCIA DO QUADRIL (CQ){"\n"}</Text>
                      <Text>A circunferência é medida com o avaliado posicionado com o lado direito do corpo voltado para o avaliador, com os pés descalços e unidos, com o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente), braços cruzados ao peito e abdômen relaxado.  O avaliador coloca a fita métrica em um plano horizontal, passando na parte medial entre os 02 (dois) pontos trocantéricos, na região mais proeminente dos glúteos. A medida é obtida ao final de uma expiração normal sem que a fita comprima a pele (Fig 11 e 12).{'\n'}
                      </Text>
                      <View style={{width:250, height:165, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:165}} source={Figura15}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 11</Text>
                      <View style={{width:250, height:165, alignSelf:'center'}}>
                      <Image style={{alignSelf:'center', width:250, height:165}} source={Figura16}></Image>
                      </View>
                      <Text style={{alignSelf:'center', marginBottom:25}}>Fig 12</Text>
          </View>
        );
      }
    }
          return (
            <View style={styles.container}>
              <HeaderTerciario title="Circunferências" pai='saude/item/Saude-1'/>
              <ScrollView style={{flex:1}}>
                <StatusBar hidden={true} />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <ScrollView>
                        {
                          Conteudo()
                        }
                        </ScrollView>

                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: EstiloComum.VerdeEscuro, borderWidth:1, width:90 }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>VOLTAR</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
                <View style={styles.div}>
                  <TouchableOpacity onPress={()=>{setModalVisible(true);setConteudo(1);}} style={styles.btn}><Entypo name="heart" size={25} color={EstiloComum.VerdeEscuro} style={{position:'relative', top:3}}/><Text style={{fontSize:20, color: EstiloComum.VerdeEscuro,letterSpacing:1, fontFamily:'BlackOpsOne_400Regular', position:'relative', left:10, top:5, flexDirection:'column', flex:1, marginRight:5}}>Sobre</Text></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setModalVisible(true);setConteudo(2);}} style={styles.btn}><Entypo name="heart" size={25} color={EstiloComum.VerdeEscuro} style={{position:'relative', top:3}}/><Text style={{fontSize:20, color: EstiloComum.VerdeEscuro,letterSpacing:1, fontFamily:'BlackOpsOne_400Regular', position:'relative', left:10, top:5, flexDirection:'column', flex:1, marginRight:5}}>Circunferência da Cintura (CC)</Text></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setModalVisible(true);setConteudo(3);}} style={styles.btn}><Entypo name="heart" size={25} color={EstiloComum.VerdeEscuro} style={{position:'relative', top:3}}/><Text style={{fontSize:20, color: EstiloComum.VerdeEscuro,letterSpacing:1, fontFamily:'BlackOpsOne_400Regular', position:'relative', left:10, top:5, flexDirection:'column', flex:1, marginRight:5}}>Circunferência Abdominal (CA)</Text></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{setModalVisible(true);setConteudo(4);}} style={styles.btn}><Entypo name="heart" size={25} color={EstiloComum.VerdeEscuro} style={{position:'relative', top:3}}/><Text style={{fontSize:20, color: EstiloComum.VerdeEscuro,letterSpacing:1, fontFamily:'BlackOpsOne_400Regular', position:'relative', left:10, top:5, flexDirection:'column', flex:1, marginRight:5}}>Circunferência do Quadril (CQ)</Text></TouchableOpacity>
                </View>
              </ScrollView>
              <Footer page="saude"/>
            </View>
            
        );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: "flex",
    borderBottomWidth: 1, 
    borderColor: EstiloComum.Branco,
    backgroundColor : EstiloComum.Branco,
  },
  div: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    margin:15,
    backgroundColor:'white',
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
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row"
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
    textAlign: "center",
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
  textStyle: {
    color: "white",
    fontFamily:'BlackOpsOne_400Regular',
    textAlign: "center"
  }
});