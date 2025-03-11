import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Primeiro criamos um stack navigator, que nos permite navegar entre telas
const Stack = createStackNavigator();

//Aqui estamos criando o componente que será renderizado na tela inicial
//Aqui estou utilizando o componente View para estruturar a tela
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Exemplo Header Button </Text>
    </View>
  );
}

//Criamos o componente principal do app que configura a navegação 
function HeaderTitle() {
  return (
    <Text style={styles.logoTitle}>Header Title</Text>
  );
}

const styles = StyleSheet.create({
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    },
})

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: () => <HeaderTitle />,
          headerRight: () => (
            <Button
            title="Botão"
            onPress={() => alert('Você pressionou o botão')}
            color="black"
            />
            ),
            }}
            />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
export default App;


