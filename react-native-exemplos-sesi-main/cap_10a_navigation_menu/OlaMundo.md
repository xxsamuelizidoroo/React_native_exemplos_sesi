## Versão (Componente Funcional - Atual)

## Versão (Componente de Classe)

import React from 'react';
import {View, Text} from 'react-native';

class OlaMundo extends React.Component {
    render() {
        return (
            <View>
                <Text>Olá, </Text>
                <Text>{this.props.nome}!</Text>
            </View>
        )
    }
}
export default OlaMundo;