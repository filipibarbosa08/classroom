import React from 'react';
// React-native-paper settings
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';

import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Atividade } from './src/screens/Atividade';
import { AtividadeFiltro } from './src/screens/Atividade-filtro';
import { AtividadeEdi } from './src/screens/Atividade-editado';
import { Notas } from './src/screens/Notas';
import { Alunos } from './src/screens/Alunos';
import { AlunosInfo } from './src/screens/Aluno-info';

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

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SignIn/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);