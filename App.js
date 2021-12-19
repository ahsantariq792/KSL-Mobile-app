import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Navigation from './Navigator/navigator';
// import ContextProvider from './context/Context';

export default function App() {
  return (
    <>
      <Navigation />
      {/* <ContextProvider /> */}
    </>
  );
}