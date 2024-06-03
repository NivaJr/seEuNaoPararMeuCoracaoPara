import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar, View, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import Saude from './pages/saude';
import Home from './pages/home'
import Tfm from './pages/tfm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';

export default function Page() {
    const [focoTfm, setFocoTfm] = useState(false)
    const [focoHome, setFocoHome] = useState(true)
    const [focoSaude, setFocoSaude] = useState(false)

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
            {focoHome ? <Text style={styles.tituloTetoHome}>IPCFEX</Text> : focoSaude ? <Text style={styles.tituloTeto}> SAÚDE</Text> : <Text style={styles.tituloTeto}> TFM</Text>}
            {focoHome && <Image source={require('../assets/images/icon.png')} style={styles.iconHome}/>}         
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
        <View style={styles.barra}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.botao}  onPress={()=>{
                    setFocoHome(true)
                    setFocoTfm(false)
                    setFocoSaude(false)
                
                }}>
                    <View style={styles.clickableIcon}>
                        <Ionicons name={focoHome ? "home" : "home-outline"} size={24} color={focoHome ? "green" : "gray" } />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.botao}  onPress={()=>{
                    setFocoHome(false)
                    setFocoTfm(true)
                    setFocoSaude(false)
                }}>
                    <View style={styles.clickableIcon}>
                        <FontAwesome5  name="running" size={24} color={focoTfm ? "green" : "gray"} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity  style={styles.botao}  onPress={()=>{
                    setFocoHome(false)
                    setFocoTfm(false)
                    setFocoSaude(true)
                }}>
                    <View style={styles.clickableIcon}>
                        <AntDesign name={focoSaude ? "heart" : "hearto"} size={24} color={focoSaude ? "green" : "gray" } />    
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
        backgroundColor:'#77d89d',
        maxHeight:100,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft: 15,
        flexDirection:'row',
    },
    teto: {
        top:0,
        left:0,
        right:0,
        position:'relative',
        display:'flex',
        backgroundColor:'#77d89d',
        maxHeight:80,
        alignItems:'center',
        justifyContent:'center',
        padding: 15,
    },
    iconHome:{
        objectFit: 'contain',
        maxHeight: 100,
        flex:1,
        
        

    }


    


})



