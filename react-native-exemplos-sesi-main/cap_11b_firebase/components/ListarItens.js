import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Importa o objeto db do arquivo config/config.js
import { db } from '../config/config';

// Importa as funções ref e onValue do firebase/database
import { ref, onValue } from 'firebase/database';

class ListarItens extends React.Component {
  // Define o estado inicial como um array vazio
  state = { itens: [] };

  // Método executado assim que o componente é montado
  componentDidMount() {
    // Cria uma referência para o nó '/itens' no Realtime Database
    const itensRef = ref(db, '/itens');

    // Monitora as alterações no nó '/itens' e atualiza o estado
    onValue(itensRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Converte os dados em um array e atualiza o estado
        const itens = Object.values(data);
        this.setState({ itens });
      } else {
        // Se não houver dados, define o estado como um array vazio
        this.setState({ itens: [] });
      }
    });
  }

  // Método que renderiza cada item da lista
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.item}</Text>
    </View>
  );

  // Método que renderiza o componente
  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        {/* Verifica se há itens no estado */}
        {this.state.itens.length > 0 ? (
          // Se houver itens, renderiza a FlatList
          <FlatList
            data={this.state.itens}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          // Se não houver itens, exibe uma mensagem
          <Text style={styles.naoHaItens}>Não há itens salvos</Text>
        )}
      </View>
    );
  }
}

// Exporta o componente ListarItens
export default ListarItens;

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  naoHaItens: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});