// import React from 'react';
// import Evento from './components/Evento';
// import UsuarioGithub from './components/UsuarioGithub';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Evento" component={Evento} />
//         <Tab.Screen name="Github" component={UsuarioGithub} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// _____________________________________________(Livro)

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Evento from './components/Evento';
import UsuarioGithub from './components/UsuarioGithub';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Evento') {
              iconName = 'logo-whatsapp';
            } else if (route.name === 'Github') {
              iconName = 'logo-github';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Evento" component={Evento} />
        <Tab.Screen name="Github" component={UsuarioGithub} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

