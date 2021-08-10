import React from 'react';
// React-native-paper settings
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Atividade } from './src/screens/Atividade';
import { AtividadeFiltro } from './src/screens/Atividade-filtro';
import { AtividadeEdi } from './src/screens/Atividade-editado';
import { Notas } from './src/screens/Notas';
import { Alunos } from './src/screens/Alunos';
import { AlunosInfo } from './src/screens/Aluno-info';
import { Login } from './src/screens/SignIn/login';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',//'#39A2DB',
    accent: 'blue',
    background: '#fff',//'#f89f65', /// laranja
    surface: '#39A2DB',
    //error: 'blue',
    //text: 'blue',
    //onSurface: 'blue',
    //disabled: 'blue',
    //placeholder:'blue',
    //backdrop: 'blue',
    //notification: 'blue',
  },
};

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <PaperProvider theme={theme}>
          <NavigationContainer>

        
      <Tab.Navigator   activeColor="#f0edf6"   inactiveColor="#f0edf6"
         barStyle={{ backgroundColor: '#39A2DB' }}

 >
        <Tab.Screen  name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}  />
        <Tab.Screen name="Atividade" component={Atividade} options={{
          tabBarLabel: 'Atividade',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="notebook-outline" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Notas" component={Notas} options={{
          tabBarLabel: 'Notas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Aluno" component={Alunos} options={{
          tabBarLabel: 'Aluno',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
      </NavigationContainer>

    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);