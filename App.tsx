import React from 'react';
import {StatusBar} from 'expo-status-bar';
import AppContainer from './src';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <AppContainer />
      <StatusBar style="auto" />
    </>
  );
}
