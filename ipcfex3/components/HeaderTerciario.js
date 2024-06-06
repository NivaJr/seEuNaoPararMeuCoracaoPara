import { StyleSheet, View, Text} from 'react-native';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import {Colors} from '../constants/Colors'
import { TouchableOpacity } from 'react-native';

export default function HeaderTerciario({title, link}){

  return(
    <View style={styles.header}>
      <Link href={link} asChild>
        <TouchableOpacity  activeOpacity={1} style={styles.headerIconView}>
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </Link>
      <View style={styles.viewTextHeader}>
        <Text style={styles.textHeader}>{title}</Text>
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
  },
  viewTextHeader: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Colors.VerdeEscuro,
    flex: 5
  },
  headerIconView: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.VerdeEscuro,
    justifyContent: 'center',
    paddingLeft: '6%'
  }
})