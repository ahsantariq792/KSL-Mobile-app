import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getAuth, signInWithEmailAndPassword } from '../Navigator/Firebase';
import Signin from './Signin';
import Signup from './Signup';



export default function Welcome({ navigation }) {





  return (

    <View style={styles.container}>
      <Image source={require('../assets/kahana.png')} style={styles.image} />
    

      <Pressable style={styles.button} >
        <Text style={styles.text} onPress={() => navigation.navigate("Signin")}>Login As User</Text>
      </Pressable>

      <Pressable style={styles.button}  >
        <Text style={styles.text} onPress={() => navigation.navigate("Managersignin")}>Login As Manager</Text>
      </Pressable>

      <Pressable style={styles.button} >
        <Text style={styles.text} onPress={() => navigation.navigate("Signup")}>Create account</Text>
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
    marginBottom:10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    margin: 5,
    width: 260
  },


  text: {
    color: "white",
    borderRadius: 15,
  }
});