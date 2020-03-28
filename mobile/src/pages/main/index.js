import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Logo from './../../assets/logo.png';
// import { Container } from './styles';

export default function Main() {
  
    const [casos, setCasos] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    function navigateToDatail(caso) {
        navigation.navigate('Detail', {caso})
    }
    
    async function loadCasos() {

        if(loading){ return };
        if(total > 0 && casos.length === total) { return };

        setLoading(true)

        const response = await api.get('api/casos', {params: {page}});
        setCasos([...casos, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)

    }

    useEffect(() => {
        loadCasos()
    }, []);


  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.containerArea}>
            <Image source={Logo} />
            <Text style={styles.header}>
                Total de <Text style={styles.headerBold}>{total} casos</Text>
            </Text>
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.titleDesc}>Escolha um caso e seja um heroi de hoje!</Text>

        <FlatList 
            style={styles.ListaContainer}
            data={casos}
            keyExtractor={caso => String(caso.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadCasos}
            onEndReachedThreshold={0.2}
            renderItem={({item: casos}) => (
                <View style={styles.Lista}>
                    <View style={styles.ListaFirstLine}>
                        <View>
                            <Text style={styles.ListaTitle}>ONG:</Text>
                            <Text style={styles.ListaDesc}>{casos.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.ListaTitle}>CASO:</Text>
                            <Text style={styles.ListaDesc}>{casos.title}</Text>
                        </View>
                    </View>
                    <View style={styles.ListaSecondLine}>
                        <Text style={styles.ListaTitle}>VALOR:</Text>
                        <Text style={styles.ListaDesc}>R$ {casos.value}.00</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigateToDatail(casos)} style={styles.ListaButtom}>
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
