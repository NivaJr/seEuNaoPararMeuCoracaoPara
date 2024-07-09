import { Pressable, StyleSheet, View} from 'react-native';
import { FontAwesome5, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function Footer({page}){
  
  const handleHomeName = () => {
    if(page === "home"){
      return "home"
    }else{
      return "home-outline"
    }
  }
  
  const handleSaudeName = () => {
    if(page === "saude"){
      return "heart"
    }else{
      return "hearto"
    }
  }
  
  const handleHomeColor = () => {
    if(page === "home"){
      return Colors.VerdeEscuro
    }else{
      return "gray"
    }
  }
  
  const handleTFMColor = () => {
    if(page === "tfm"){
      return Colors.VerdeEscuro
    }else{
      return "gray"
    }
  }
  
  const handleSaudeColor = () => {
    if(page === "saude"){
      return Colors.VerdeEscuro
    }else{
      return "gray"
    }
  }

  const handleTreinosEspeciaisColor = () => {
    if(page === "treinosEspeciais"){
      return Colors.VerdeEscuro
    }else{
      return "gray"
    }
  }

  return(
    <View style={styles.bottom}>
    
    <View style={styles.bottomIcon}>
        <Link href="/" asChild>
            <Pressable>
                    <Ionicons 
                        name={handleHomeName()} 
                        size={24} 
                        color={handleHomeColor()} 
                    />        
            </Pressable>
        </Link>
    </View>

    <View style={styles.bottomIcon}>
        <Link href="pages/tfm" asChild>
            <Pressable>
                    <FontAwesome5  
                        name="running" 
                        size={24} 
                        color={handleTFMColor()} 
                    />
            </Pressable>
        </Link>
    </View>

    <View style={styles.bottomIcon}>
        <Link href="pages/saude" asChild>
            <Pressable>
                    <AntDesign 
                        name={handleSaudeName()}
                        size={24} 
                        color={handleSaudeColor()} 
                    />    
            </Pressable>
        </Link>
    </View>    
    
    <View style={styles.bottomIcon}>
        <Link href="pages/treinosEspeciais" asChild>
            <Pressable>
                    <MaterialCommunityIcons 
                        name="weight-lifter"
                        size={24} 
                        color={handleTreinosEspeciaisColor()} 
                    />    
            </Pressable>
        </Link>
    </View>    
  </View>
  )
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: Colors.VermelhoEscuro,
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        height: '7%'
      },
      bottomIcon: {
        backgroundColor: '#fff',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
})