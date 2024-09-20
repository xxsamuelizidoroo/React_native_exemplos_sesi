import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';

// Importa o objeto db do arquivo config/config.js
import { db } from '../config/config';

// Importa as funções ref e push do firebase/database
import { ref, push } from 'firebase/database';

class AdicionaItens extends React.Component {
  // Define o estado inicial com um objeto item vazio
  state = { item: '' };

  // Função que salva um novo item no Realtime Database
  salvaItem = () => {
    // Cria uma referência para o nó '/itens' no Realtime Database
    const itemRef = ref(db, '/itens');

    // Adiciona um novo item ao nó '/itens'
    push(itemRef, { item: this.state.item });

    // Exibe um alerta informando que o item foi salvo
    Alert.alert('Item salvo!');

    // Limpa o campo de texto após salvar o item
    this.setState({ item: '' });
  };

  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        <Text style={styles.titulo}>Adicionar item</Text>
        {/* Campo de texto para digitar o novo item */}
        <TextInput
          style={styles.itemInput}
          onChangeText={item => this.setState({ item })}
          value={this.state.item}
          placeholder="Digite um item"
          placeholderTextColor="#ccc"
        />
        {/* Botão para adicionar o novo item */}
        <TouchableHighlight style={styles.btn} underlayColor="white" onPress={this.salvaItem}>
          <Text style={styles.textoBtn}>Adicionar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// Exporta o componente AdicionaItens
export default AdicionaItens;

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  titulo: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  textoBtn: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  btn: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});