import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar, View, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Pressable, Text } from 'react-native';
import { useState } from 'react';
import Saude from './pages/saude';
import Home from './pages/home'
import Tfm from './pages/tfm'
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';
import Footer from '../components/Footer';
import { Colors } from '../constants/Colors';
import TreinosEspeciais from './pages/treinosEspeciais';

export default function Page() {
    const [focoTfm, setFocoTfm] = useState(false)
    const [focoHome, setFocoHome] = useState(true)
    const [focoSaude, setFocoSaude] = useState(false)
    const [focoTreinosEspeciais, setFocoTreinosEspeciais] = useState(false)

    let [fontsLoaded] = useFonts({
        BlackOpsOne_400Regular,
      });

    if (!fontsLoaded) {
    return null;
    }
    
    
  return (
    <View style={styles.main}>
        <StatusBar hidden={true} />
        <View style={focoHome ? styles.tetoHome  : styles.teto}>
            {focoHome ? <Text style={styles.tituloTetoHome}>IPCFEX</Text> 
                : focoSaude ? <Text style={styles.tituloTeto}>SAÚDE</Text> 
                : focoHome ? <Text style={styles.tituloTeto}>TFM</Text> 
                : <Text style={styles.tituloTeto}>TREINOS ESPECIAIS</Text>
            }
            {focoHome && <Image source={require('../assets/images/logoipcfex.png')} style={styles.iconHome}/>}         
        </View>

        {
            focoSaude &&
            <Saude/>
        }
        {
            focoHome &&
            <Home/>
        }
        {
            focoTfm &&
            <Tfm/>
        }
        {
            focoTreinosEspeciais &&
            <TreinosEspeciais/>
        }
        <Footer page="home"/>
    </View>
    
  );

};
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    barra: {
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        paddingBottom:20,
        position: 'absolute',
        backgroundColor:'white',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',

    },
    buttonContainer: {
        flex: 1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main: {
        height: '100%',
        display:'flex',
    },
    clickableIcon: {
        width:40,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    tituloTetoHome:{
        fontSize: 30,
        color: 'white',
        left:0,
        fontFamily: "BlackOpsOne_400Regular",
        flex:2,
        
    },
    tituloTeto:{
        fontSize: 30,
        color: 'white',
        left:0,
        fontFamily: 'BlackOpsOne_400Regular',
        position:'relative',
        
    },
    tetoHome: {
        top:0,
        left:0,
        right:0,
        position:'relative',
        display:'flex',
        backgroundColor: Colors.VerdeClaro,
        maxHeight:100,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft: 15,
        flexDirection:'row',
        paddingVertical: 10,
    },
    teto: {
        top:0,
        left:0,
        right:0,
        position:'relative',
        display:'flex',
        backgroundColor: Colors.VerdeClaro,
        maxHeight:80,
        alignItems:'center',
        justifyContent:'center',
        padding: 15,
    },
    iconHome:{
        objectFit: 'contain',
        maxHeight: 80,
        flex:1,
        
        

    }


    


})



