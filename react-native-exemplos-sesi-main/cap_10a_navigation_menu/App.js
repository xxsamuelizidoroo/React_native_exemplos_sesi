import React from 'react';
import Evento from './components/Evento';
import UsuarioGithub from './components/UsuarioGithub';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Evento" component={Evento} />
        <Drawer.Screen name="Github" component={UsuarioGithub} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  }