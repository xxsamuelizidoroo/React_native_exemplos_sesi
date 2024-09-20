import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
  return (
    <View style={estilos.container}>
      <Text style={[estilos.texto, props.numero % 2 !== 0 && estilos.bordaVermelha]}>
        {props.numero % 2 === 0 ? 'O número é par!' : 'O número é ímpar!'}
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  bordaVermelha: {
    borderWidth: 2,
    borderColor: 'red', // Cor da borda vermelha
  }
});
