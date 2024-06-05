import { StyleSheet, View, Text} from 'react-native';

export default function HeaderSecundario({title}){

  return(
    <View style={styles.header}>
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
    height: '12%',
    justifyContent: 'center'
  },
  textHeader: {
    fontFamily: 'BlackOpsOne_400Regular',
    fontSize: 30,
    color: 'white',
  },
  viewTextHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
})