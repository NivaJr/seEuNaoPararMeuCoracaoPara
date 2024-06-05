import { StyleSheet, Text, View } from "react-native";
import HeaderTerciario from "../../../../components/HeaderTerciario";
import Footer from "../../../../components/Footer";
import LineLink from "../../../../components/LineLink";
import { Colors } from "../../../../constants/Colors";
import { useState } from "react";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
      <HeaderTerciario title='Sessão de TFM'/>

      <View style={styles.middle}>
        <View style={styles.middleContent}>
          <LineLink title='Sobre' link='Tfm-1' icon='tfm' />
          <LineLink title='Fase de Aquecimento em Movimento' link='Tfm-2' icon='tfm'/>
          <LineLink title='Fase de Aquecimento Estático' link='Tfm-3' icon='tfm'/>
          <LineLink title='Fase de Trabalho Principal' link='Tfm-4' icon='tfm'/>
          <LineLink title='Fase de Volta à Calma' link='Tfm-5' icon='tfm'/>
        </View>
      </View>

      <Footer page="tfm"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.backgroundColor,
  },
  middle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,  
  },
  middleContent: {
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    width: '94%',
    marginTop: '4%',
    borderRadius: 2,
  },
})