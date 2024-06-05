import { Text,  View, Image, Modal, StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import Footer from "../../../../components/Footer"
import HeaderSecundario from "../../../../components/HeaderSecundario"
import LineSaude from "../../../../components/LineSaude"
import LineModal from '../../../../components/LineModal';
import { Button } from 'react-native';





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
                            <Text style={styles.tittle}>Massa Corporal</Text>
                            <Text style={styles.modalText}>Para avaliar a massa corporal total é necessária uma balança, digital ou analógica, calibrada e com precisão de 100 gramas. O avaliado se posiciona no centro do equipamento, com os pés descalços e unidos, o corpo ereto (cabeça erguida em ângulo reto com o pescoço, mantendo o olhar em um ponto fixo à sua frente) e com os braços estendidos ao lado do corpo (Fig 1). O avaliador se posiciona ao lado direito do avaliado para fazer a leitura da massa corporal total (Fig 2).</Text>
                            <Button title="Voltar" onPress={() => setModal1Visible(!modal1Visible)} />
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
                    setModal1Visible(!modal2Visible);
                    }}
                >   
                    <View style={styles.centeredView}>
                        <View style={styles.blurBackground}>
                            <View style={styles.modalView}>
                            <Text style={styles.modalText}>Este é o modal2!</Text>
                            <Button title="Voltar" onPress={() => setModal2Visible(!modal2Visible)} />
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})