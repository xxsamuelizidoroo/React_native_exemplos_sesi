import React from 'react';
import {View, Text} from 'react-native';
import Estilos from '../estilos/Estilos';

class OlaMundo extends React.Component {
    render() {
        return (
            <View>
                <Text>Olá, </Text>
                <Text style={Estilos.texto}>{this.props.nome}!</Text>
            </View>
        )
    }
}
export default OlaMundo;