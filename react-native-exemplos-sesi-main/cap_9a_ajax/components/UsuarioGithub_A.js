import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class UsuarioGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      usuario: 'octocat'
    }

    this.fetchDados = this.fetchDados.bind(this);
  }

  fetchDados() {
    fetch(`https://api.github.com/users/${this.state.usuario}`)
      .then(response => response.json())
      .then(json => this.setState({ dados: json }))
      .catch(err => this.setState({ dados: { err } }))
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text>{JSON.stringify(this.state.dados)}</Text>
        <View>
          <TextInput
            onChangeText={usuario => { this.setState({ usuario }) }}
            value={this.state.usuario}
          />
        </View>
        <View>
          <Button
            onPress={this.fetchDados}
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do usuário no GitHub"
          />
        </View>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default UsuarioGithub;
