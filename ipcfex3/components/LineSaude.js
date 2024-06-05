import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router"


export default function LineSaude({title, link}){
  return(
    <Link href={link} asChild>
        <TouchableOpacity style={styles.line}>
          <View style={styles.iconView}>
            <AntDesign name="heart" size={25} color={'green'} style={styles.coracao}/>
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
    flexDirection:"row"
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
    justifyContent: 'center'
  },
  topico:{
    fontSize:20,
    letterSpacing:1,
    color:'green',
    fontFamily:'BlackOpsOne_400Regular',
    flexShrink: 1,
    
  },
  iconView: {
  },
  titleView: {
    display: 'flex',
  }
})