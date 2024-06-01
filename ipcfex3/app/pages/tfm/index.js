import { Text, ScrollView, View, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function Tfm() {
  return (
      <ScrollView style={styles.contaiener}>
      <View style={styles.janela}>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
        <Text> Olá</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contaiener: {
    flex:1,
    borderBottomWidth: 1, 
    borderColor: '#fafafa',
    backgroundColor: '#fafafa'
  },
  janela: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    margin:15,
    backgroundColor:'white',
  },
})
