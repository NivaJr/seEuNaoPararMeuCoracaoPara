import { Text,  View, Image, Modal, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Footer from "../../../../components/Footer"
import HeaderSecundario from "../../../../components/HeaderSecundario"
import LineSaude from "../../../../components/LineSaude"
import LineModal from '../../../../components/LineModal';
import { Button } from 'react-native';
import Figura5 from '../../../../assets/images/figura5.png';
import figura6 from "../../../../assets/images/figura6.png";
import Figura7 from '../../../../assets/images/figura7.png';
import Figura8 from '../../../../assets/images/figura8.png';
import Figura9 from '../../../../assets/images/figura9.png';
import CustomButton from '../../../../components/voltarbtn';




export default function Saude1() {

    const [modal1Visible, setModal1Visible] = useState(false);

    const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <HeaderSecundario title='SAUDE'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineModal icon="saude" title='Massa Corporal' setModalVisible={setModal1Visible} link="pages/saude/item/Saude-1"/>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modal1Visible}
                    onRequestClose={() => {
                    setModal1Visible(!modal1Visible);
                    }}
                >   
                <View style={styles.centeredView}>
                    <View style={styles.blurBackground}>
                        <View style={styles.modalView}>
                            <ScrollView style={styles.scrollViewContent}>
                                <View style={styles.modalview2}>
                                    <Text style={styles.tittle}>MASSA CORPORAL</Text>
                                    <Text style={styles.modalText}>Para avaliar a massa corporal total é necessária uma balança, digital ou analógica, calibrada e com precisão de 100 gramas. O avaliado se posiciona no centro do equipamento, com os pés descalços e unidos, o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente) e com os braços estendidos ao lado do corpo (Fig 1). O avaliador se posiciona ao lado direito do avaliado para fazer a leitura da massa corporal total (Fig 2).</Text>
                                    <Image source={Figura5}></Image>
                                    <Text style={{alignSelf:'center', marginBottom:25}}>Fig 1</Text>
                                    <Image source={figura6}></Image>
                                    <Text style={{alignSelf:'center', marginBottom:25}}>Fig 2</Text>
                                    <CustomButton title="VOLTAR" onPress={() => setModal1Visible(!modal1Visible)}/>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                </Modal>
          <LineModal icon = "saude" title='Estatura' setModalVisible ={setModal2Visible} link="pages/saude/item/Saude-1"/>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modal2Visible}
                    onRequestClose={() => {
                    setModal2Visible(!modal2Visible);
                    }}
                >   
                    <View style={styles.centeredView}>
                        <View style={styles.blurBackground}>
                            <View style={styles.modalView}>
                                <ScrollView style={styles.scrollViewContent}>
                                    <View style={styles.modalview2}>
                                        <Text style={styles.tittle}>ESTATURA</Text>
                                        <Text style={styles.modalText}>Para avaliar a estatura é necessário um estadiômetro com precisão de um milímetro e com um cursor que desliza ao longo da superfície vertical para permitir sua leitura. O avaliado se posiciona no centro do equipamento, de costas para a escala de medidas, com os pés descalços e unidos, com o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente) e braços estendidos ao lado do corpo. Os calcanhares, panturrilhas, nádegas, ombros e parte posterior da cabeça não podem encostar no estadiômetro (Fig 3). O Avaliador se posiciona ao lado direito do avaliado para fazer a leitura da estatura (Fig 4). Antes de iniciar a leitura, o avaliado deve se afastar do estadiômetro, garantindo que o cursor não se desloque. A leitura é feita com o cursor em ângulo reto em relação à escala, quando o mesmo tocar a cabeça do avaliado (Fig 5).{'\n'}
                                        </Text>
                                        <Image source={Figura7}></Image>
                                        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 4</Text>
                                        <Image source={Figura8}></Image>
                                        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 5</Text>
                                        <Image source={Figura9}></Image>
                                        <Text style={{alignSelf:'center', marginBottom:25}}>Fig 6</Text>
                                        <CustomButton title="VOLTAR" onPress={() => setModal2Visible(!modal2Visible)}/>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
          <LineSaude title='Circunferências' link="pages/saude/item/Saude-1"/>
          <LineSaude title='IMC' link="pages/saude/item/Saude-1"/>
          <LineSaude title='IMC' link="pages/saude/item/Saude-1"/>
          <LineSaude title='IMC' link="pages/saude/item/Saude-1"/>
        </View>
      </View>

      <Footer page="saude"/>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#f00435',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)', // semi-transparente para dar efeito de borrão
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'green',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: '12%',
  },
  middle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  middleContent: {
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    width: '94%',
    marginTop: '4%',
    borderRadius: 2,
  },
  textHeader: {
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 30,
    color: 'white',
  },
  viewTextHeader: {
    backgroundColor: 'black',
  },
  imageHeader: {
    height: 100,
    backgroundColor: 'white'
  },
  viewImageHeader: {
    backgroundColor: 'purple',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 30,
    justifyContent: "start",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxHeight: '60%',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'start',
  },
  tittle: {
    fontWeight: "bold",
    marginBottom: 15,
  },

  btn: {
    color: "red",
    width: 100,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  modalview2: {
    alignItems: "center",
  }
})