import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Logo from './../../assets/logo.png';
// import { Container } from './styles';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image source={Logo} />
            <Text>
                Total de <Text>0 casos</Text>
            </Text>
        </View>
        <Text>Seja Bem vindo!</Text>
        <Text>Escolha um caso e seja um heroi no dia de hoje!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10
    }
})
