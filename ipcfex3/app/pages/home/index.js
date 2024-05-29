import { Slot } from 'expo-router';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Nivaldo é lindo</Text>
    </View>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});