import React from 'react';
import { FlatList, SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from './../../assets/logo.png';
// import { Container } from './styles';

export default function Main() {
  
    const navigation = useNavigation()

    function navigateToDatail() {
        navigation.navigate('Detail')
    }
    
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

        <FlatList 
            style={styles.ListaContainer}
            data={[1, 2, 3, 4, 5]}
            keyExtractor={item => String(item)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.Lista}>
                    <View style={styles.ListaFirstLine}>
                        <View>
                            <Text style={styles.ListaTitle}>ONG:</Text>
                            <Text style={styles.ListaDesc}>APADA</Text>
                        </View>
                        <View>
                            <Text style={styles.ListaTitle}>Valor:</Text>
                            <Text style={styles.ListaDesc}>R$: 120.00</Text>
                        </View>
                    </View>
                    <View style={styles.ListaSecondLine}>
                        <Text style={styles.ListaTitle}>Descrição:</Text>
                        <Text style={styles.ListaDesc}>Caso de uma cadelinha atropelada</Text>
                    </View>

                    <TouchableOpacity onPress={navigateToDatail} style={styles.ListaButtom}>
                        <Text style={styles.ListaTextButtom}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={15} color="#E02041" />
                    </TouchableOpacity>
                </View>
            )}
        />

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
        marginBottom: 5,
        marginTop: 34,
        fontWeight: 'bold'
    },
    titleDesc: {
        fontSize: 15,
        color: '#737380',
        lineHeight: 24
    },
    ListaContainer: {
        marginTop: 15,
    },
    Lista: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    ListaFirstLine: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:  'center'
    },
    ListaTitle: {
        fontWeight: 'bold',
        color: '#41414d',
        fontSize: 15
    },
    ListaDesc: {
        marginTop: 2,
        color: '#737380',
        marginBottom: 12
    },
    ListaSecondLine: {
        marginTop: 8
    },
    ListaButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'  
    },
    ListaTextButtom: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e02041',
    }
})
