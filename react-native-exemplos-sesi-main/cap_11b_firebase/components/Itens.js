import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Itens extends React.Component {
  // Define o tipo da prop 'itens' como um array obrigatório
  static propTypes = {
    itens: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.listaItens}>
        {/* Mapeia o array de itens e renderiza um componente View para cada item */}
        {this.props.itens.map(({ item }, index) => {
          return (
            <View key={index}>
              <Text style={styles.textItens}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

// Exporta o componente Itens
export default Itens;

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  listaItens: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textItens: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});