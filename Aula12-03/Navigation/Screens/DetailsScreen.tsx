import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamnlist = {
    Home: undefined;
    Details: undefined;
}

type DetailsScreenProps = StackScreenProps<RootStackParamnlist, 'Details'>;

const DetailsScreen : React.FC<DetailsScreenProps> = ( {navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>Bem vindo à tela Details Screen</Text>
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

export default DetailsScreen;