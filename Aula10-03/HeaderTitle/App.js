import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Primeiro criamos um stack navigator, que nos permite navegar entre telas
const Stack = createStackNavigator();

//Aqui estamos criando o componente que será renderizado na tela inicial
//Aqui estou utilizando o componente View para estruturar a tela
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meu Aplicativo</Text>
    </View>
  );
}

//Criamos o componente principal do app que configura a navegação 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TituloHome" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'blue', 
    fontSize: 20,  
    fontWeight: 'bold',
    alignItems: 'center'
  },
});

export default App;


