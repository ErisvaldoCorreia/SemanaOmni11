import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import {Cinzel_900Black, useFonts } from '@expo-google-fonts/cinzel'

import Login from './src/pages/Login';

export default function App() {
  let [fontsLoaded] = useFonts({
    Cinzel_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    return (
      <>
        <Login />
        <StatusBar style="auto" />
      </>
    );
    
  }
}

