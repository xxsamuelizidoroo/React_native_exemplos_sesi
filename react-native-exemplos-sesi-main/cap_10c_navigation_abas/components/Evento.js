import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Evento extends React.Component {
        // state = {
        // input: ''
        // }

        state = {
        input: 'O React Native é demais!!'
        }

        render() {
            return (
                <View style={estilos.container}>
                    <TextInput
                    style={estilos.input}
                    value={this.state.input}
                    onChangeText={text => this.setState({ input: text })}
                />
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
    },
    input: {
    height: 50,
    width: 300,
    fontSize: 26,
    borderWidth: 1,
    borderColor: 'black',
    },
    font30: {
    fontSize: 30
    }
    });

    export default Evento;