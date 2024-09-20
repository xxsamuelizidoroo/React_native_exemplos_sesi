import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdicionaItens from "./components/AdicionaItens";
import ListarItens from "./components/ListarItens";

function Inicial({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.botao}>
        <Button
          title="Adicionar"
          onPress={() => navigation.navigate("Adicionar")}
        />
      </View>
      <View style={estilos.botao}>
        <Button title="Listar" onPress={() => navigation.navigate("Listar")} />
      </View>
    </View>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Adicionar" component={AdicionaItens} />
        <Stack.Screen name="Listar" component={ListarItens} />
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
  botao: {
    margin: 10,
  },
});
