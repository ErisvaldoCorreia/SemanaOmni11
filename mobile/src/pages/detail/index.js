import React from 'react';
import { Linking, SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import Logo from './../../assets/logo.png';

export default function Detail() {
  
  // coletando os dados vindos no parametros da rota navegada.
  const route = useRoute()
  const caso = route.params.caso;

  const navigation = useNavigation()
  const message = `
    Olá ${caso.name},
    Estou entrando em contato para saber como ajudar no caso:
    ${caso.title}.
    Fico no aguardo de um contato! :)
  `;

  function navigateToBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${caso.title}`,
      recipients: [caso.email],
      body: message
    })
  }

  function sendWhats() {
    Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${message}`);
  }

  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.containerArea}>
            <Image source={Logo} />
            <TouchableOpacity onPress={navigateToBack}>
              <Feather name='arrow-left' size={22} color='#e02041' />
            </TouchableOpacity>
        </View>

        <View style={styles.Lista}>
          <Text style={styles.introLista}>
            Detalhes do caso:
          </Text>
                    <View style={styles.ListaFirstLine}>
                        <View>
                            <Text style={styles.ListaTitle}>ONG:</Text>
                            <Text style={styles.ListaDesc}>{caso.name} - {caso.city}/{caso.uf}</Text>
                        </View>
                        <View>
                            <Text style={styles.ListaTitle}>VALOR:</Text>
                            <Text style={styles.ListaDesc}>R$ {caso.value}.00</Text>
                        </View>
                    </View>
                    <View style={styles.ListaSecondLine}>
                        <Text style={styles.ListaTitle}>Caso:</Text>
                        <Text style={styles.ListaDesc}>{caso.title}</Text>
                    </View>
                    <View style={styles.ListaSecondLine}>
                        <Text style={styles.ListaTitle}>Descrição:</Text>
                        <Text style={styles.ListaDesc}>{caso.description}</Text>
                    </View>
                </View>
                <View style={styles.boxContact}>
                      <Text style={[styles.introLista, {marginBottom: 0}]}>
                        Seja o Herói!
                      </Text>
                    <Text style={styles.titleDesc}>
                      Entre em contato!
                    </Text>
                    <View style={styles.actions}>
                    <TouchableOpacity onPress={sendWhats} style={styles.ListaButtom}>
                        <Text style={styles.ListaTextButtom}>
                            WhatsApp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={sendMail} style={styles.ListaButtom}>
                        <Text style={styles.ListaTextButtom}>
                            E-mail
                        </Text>
                    </TouchableOpacity>
                    </View>
                    </View>


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
      alignItems: 'center',
      marginBottom: 20
  },
  introLista: {
    fontWeight: 'bold',
    color: '#e02041',
    fontSize: 18,
    marginBottom: 15
  },
  header: {
      fontSize: 15,
      color: '#737380'
  },
  headerBold: {
      fontWeight: 'bold'
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
boxContact: {
  padding: 20,
  marginBottom: 10,
  backgroundColor: "#fff",
  borderRadius: 8,
},
actions: {
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
ListaButtom: {
  backgroundColor: '#e02041',
  borderRadius: 8,
  height: 50,
  width: '48%',
  justifyContent: 'center',
  alignItems: 'center'
},
ListaTextButtom: {
  color: '#fff',
  fontSize: 15,
  fontWeight: 'bold'
},
titleDesc: {
  fontSize: 15,
  color: '#737380',
  lineHeight: 24
},
});
