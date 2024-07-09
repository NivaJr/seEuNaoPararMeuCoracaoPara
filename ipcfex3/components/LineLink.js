import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Colors } from "../constants/Colors"



export default function LineLink({title, link, icon}){
  return(
    <Link href={`pages/${link}`} onPress={() => {console.log(link)}} asChild>
      <TouchableOpacity style={styles.line}>
        <View style={styles.iconView}>
          {
            icon === 'tfm' &&
            <FontAwesome5  name="running" size={24} color={Colors.VerdeEscuro} />      
          }
          {
            icon === 'saude' &&  
            <AntDesign name="heart" size={25} color={Colors.VerdeEscuro} style={styles.coracao}/>
          }
          {
            icon === 'treinosEspeciais' &&  
            <MaterialCommunityIcons name="weight-lifter" size={25} color={Colors.VerdeEscuro}/>
          }
        </View>
        <View style={styles.titleView}>
          <Text style={styles.topico}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  line:{
    alignSelf:'center',
    height:'auto',
    width:"100%",
    padding:10,
    flexDirection:"row",
    // backgroundColor: 'black',
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
    fontSize:20,
    letterSpacing:1,
    color:Colors.VerdeEscuro,
    fontFamily:'BlackOpsOne_400Regular',
    flexShrink: 1,
    flexDirection: 'column',
    
  },
  iconView: {
    paddingRight: '3%'
  },
  titleView: {
    display: 'flex',
    flexShrink: 1
  }
})