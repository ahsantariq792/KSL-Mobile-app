
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import VerifyWithID from './VerifyWithID';
import VerifyWithQR from './VerifyWithQR';



export default function Selection({ navigation }) {

 


  return (

    <View style={styles.container}>
      <Image source={require('../../assets/kahana.png')} style={styles.image} />
     
      <Pressable style={styles.button} >
        <Text style={styles.text} onPress={() => navigation.navigate("VerifyWithQR")}> Verify from QR Code</Text>
      </Pressable>

      <Pressable style={styles.button} >
        <Text style={styles.text} onPress={() => navigation.navigate("VerifyWithID")}>Verify from serial number</Text>
      </Pressable>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  image: {
    height: 100,
    width: 200,
    marginBottom:120,
  },
  button: {

    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 260,
    color: "white",
  },
  text: {
    color: "white",
  }

});