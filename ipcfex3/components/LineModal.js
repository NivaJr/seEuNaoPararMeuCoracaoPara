import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";



export default function LineModal({title, setModalVisible, icon}){
  return(
      <TouchableOpacity style={styles.line} onPress={() => setModalVisible(true)}>
        <View style={styles.iconView}>
          {
            icon === 'tfm' &&
            <FontAwesome5  name="running" size={24} color={Colors.VerdeEscuro} />      
          }
          {
            icon === 'saude' &&  
            <AntDesign name="heart" size={25} color={Colors.VerdeEscuro} style={styles.coracao}/>
          }
        </View>
        <View style={styles.titleView}>
          <Text style={styles.topico}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  line:{
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row"
  },
  header: {
    backgroundColor: Colors.VerdeEscuro,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: '12%',
    justifyContent: 'center'
  },
  topico:{
    fontSize: 20,
    letterSpacing:1,
    color: Colors.VerdeEscuro,
    fontFamily:'BlackOpsOne_400Regular',
    flexShrink: 1,
    
  },
  iconView: {
    paddingRight: '3%'
  },
  titleView: {
    display: 'flex',
  }
})