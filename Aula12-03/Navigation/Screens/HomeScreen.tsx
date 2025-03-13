import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamnlist = {
    Home: undefined;
    Details: undefined;
}

type HomeScreenProps = StackScreenProps<RootStackParamnlist, 'Home'>;

const HomeScreen : React.FC<HomeScreenProps> = ( {navigation}) => {

    return(
        <View style={styles.container}>
            <Text>Bem vindo à tela Home Screen</Text>
            <Button
            title = "Ir para Detalhes"
            onPress={()=> navigation.navigate('Details')}/>
    
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
