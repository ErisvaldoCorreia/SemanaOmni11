import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Logo from './../../assets/logo.png';
// import { Container } from './styles';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerArea}>
            <Image source={Logo} />
            <Text style={styles.header}>
                Total de <Text style={styles.headerBold}>0 casos</Text>
            </Text>
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.titleDesc}>Escolha um caso e seja um heroi de hoje!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20
    },
    containerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontSize: 15,
        color: '#737380'
    },
    headerBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        color: '#13131a',
        marginBottom: 16,
        marginTop: 34,
        fontWeight: 'bold'
    },
    titleDesc: {
        fontSize: 15,
        color: '#737380',
        lineHeight: 24
    }
})
