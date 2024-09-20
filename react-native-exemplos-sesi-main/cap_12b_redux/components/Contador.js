// Importa o React, o hook useState e useReducer
import React, { useReducer } from 'react';

// Importa os componentes necessários do React Native
import { Button, View, Text, StyleSheet } from 'react-native';

// Define a função reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + action.payload };
    case 'decrementar':
      return { contador: state.contador - action.payload };
    default:
      return state;
  }
};

// Define o componente funcional Contador
const Contador = () => {
  // Inicializa o estado do contador usando useReducer
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    // Container principal que centraliza verticalmente e horizontalmente os elementos
    <View style={styles.conteudo}>
      {/* Exibe o texto "Contagem" */}
      <Text>Contagem</Text>
      {/* Exibe o valor atual do contador */}
      <Text style={styles.contador}>{state.contador}</Text>
      {/* Container para os botões, empilhando-os verticalmente e centralizando-os horizontalmente */}
      <View style={styles.botoesContainer}>
        {/* Botão para incrementar o contador quando pressionado */}
        <Button
          title="Incrementar"
          onPress={() => dispatch({ type: 'incrementar', payload: 1 })}
        />
        {/* View para adicionar espaço vertical entre os botões */}
        <View style={styles.espacoVertical} />
        {/* Botão para decrementar o contador quando pressionado */}
        <Button
          title="Decrementar"
          onPress={() => dispatch({ type: 'decrementar', payload: 1 })}
        />
      </View>
    </View>
  );
};

// Objeto com os estilos utilizados
const styles = StyleSheet.create({
  // Estilo para o container principal
  conteudo: {
    // Ocupa todo o espaço disponível
    flex: 1,
    // Centraliza verticalmente
    justifyContent: 'center',
    // Centraliza horizontalmente
    alignItems: 'center',
  },
  // Estilo para o texto do contador
  contador: {
    // Define o tamanho da fonte para 32
    fontSize: 32,
  },
  // Estilo para o container dos botões
  botoesContainer: {
    // Empilha os botões verticalmente
    flexDirection: 'column',
    // Centraliza horizontalmente
    alignItems: 'center',
  },
  // Estilo para adicionar espaço vertical
  espacoVertical: {
    // Define uma margem vertical de 10px
    marginVertical: 10,
  },
});

// Exporta o componente Contador
export default Contador;
