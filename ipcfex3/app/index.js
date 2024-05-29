import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { Button, SafeAreaViewBase, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import Saude from './pages/saude';
import Home from './pages/home'
import Tfm from './pages/tfm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function Page() {
    const [focoTfm, setFocoTfm] = useState(false)
    const [focoHome, setFocoHome] = useState(true)
    const [focoSaude, setFocoSaude] = useState(false)
    
    
  return (
    <View style={styles.main}>
        <Header>

        </Header>
        {
            focoHome ? <Text>Home</Text> : focoSaude ? <Text> Saude </Text> : <Text>Tfm</Text>
        }
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
        <Link href="./pages/home" asChild>

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
        </Link>
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
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main: {
        height: '100%'
    },
    clickableIcon: {
        width:40,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }
    


})



