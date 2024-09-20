import React from "react";
import { Button, View, StyleSheet } from "react-native";
import Evento from "./components/Evento";
import UsuarioGithub from "./components/UsuarioGithub";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function TelaInicial({ navigation }) {
  return (
    <View style={estilos.container}>

      <View style={estilos.botaocontainer}>
        <Button title="Evento" onPress={() => navigation.navigate("Evento")} />
      </View>

      <View style={estilos.botaocontainer}>
        <Button
          style={estilos.botao}
          title="Usuário GitHub"
          onPress={() => navigation.navigate("Github")}
        />
      </View>

    </View>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaInicial} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="Github" component={UsuarioGithub} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botaocontainer: {
    marginVertical: 10,

  },

});
