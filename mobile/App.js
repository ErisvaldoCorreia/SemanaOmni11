import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#e02041" barStyle='light-content' />
      <Routes />
    </>
  );
}
