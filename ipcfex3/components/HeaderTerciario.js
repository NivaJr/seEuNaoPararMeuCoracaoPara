import { StyleSheet, View, Text,  Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Colors} from '../constants/Colors'
import { Link } from 'expo-router';

export default function HeaderTerciario({title, pai}){

  return(
    <View style={styles.header}>
      <Link href={`pages/${pai}`} asChild>
        <Pressable style={styles.headerIconView}>
          <View>
            <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
          </View>
        </Pressable>
      </Link>
      <View style={styles.viewTextHeader}>
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.textHeader}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: '10%',
    justifyContent: 'center'
  },
  textHeader: {
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 22,
    color: 'white',
    overflow: 'hidden',
    
  },
  viewTextHeader: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Colors.VerdeEscuro,
    flex: 5,
    paddingRight: '5%',
  },
  headerIconView: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.VerdeEscuro,
    justifyContent: 'center',
    paddingLeft: '6%'
  }
})