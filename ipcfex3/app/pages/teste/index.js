import { Text, StyleSheet, View } from 'react-native';

export default function Tfm() {
  return(
    <View style={styles.main}>
        <Text>Ola Ola</Text>

        <Text>Ultimo texto</Text>
        <View style={styles.barra}>
            <Text>
                nav bar
            </Text>
        </View>
    </View>
  ) 
    
}

const styles = StyleSheet.create({
    barra: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        padding: 10,
    },
    main: {
        height: '100%'
    }

})