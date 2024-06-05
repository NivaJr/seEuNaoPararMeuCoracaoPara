import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#5baf8c',
      marginTop: 40,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1, // Adiciona a largura da borda
      borderColor: '#000', // Adiciona a cor da borda
    },
    buttonText: {
      fontFamily:'BlackOpsOne_400Regular',
      color: '#fff',
      fontSize: 16,
    },
  });
  
  export default CustomButton;