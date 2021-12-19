
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




export default function VerifyWithID({ navigation }) {

  


  return (

    <View style={styles.container}>
      <Image source={require('../../assets/kahana.png')} style={styles.image} />
      <TextInput style={styles.input}  placeholder="Enter Serial Number" />
      
      <Pressable style={styles.button} >
        <Text style={styles.text}>Verify</Text>
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
    marginBottom:80,
  },
  button: {

    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 260,
    color:"white"
  },
  accbutton: {

  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 15,
  }
});