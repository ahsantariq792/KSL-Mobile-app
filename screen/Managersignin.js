import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from '../Navigator/Firebase';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Selection from './Selection';
import { GlobalContext } from '../context/Context';

export default function Managersignin({ navigation }) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { state, dispatch } = useContext(GlobalContext);


  const Login = async () => {
    try {
      const auth = getAuth();
     
      let { user } = await createUserWithEmailAndPassword(auth, email, password);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "LOGIN_USER", payload:user.email });
          alert.log(user.uid)
        
      })

      
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });

      // let { user } = await signInWithEmailAndPassword(auth, email, password);
      // dispatch({ type: "LOGIN_USER", payload:user.email });
      navigation.navigate('Selection')


    } catch (err) {
      console.log(err.message)

    }
  }
















  
  return (

    <View style={styles.container}>
      {/* <Image source={require('../Images/logo.png')} style={styles.pic}/> */}
      <TextInput style={styles.input} onChangeText={(email) => { setemail(email) }} placeholder="Enter your email" />
      <TextInput secureTextEntry={true}  style={styles.input} onChangeText={(password) => { setpassword(password) }} placeholder="Enter password" />

      <Pressable style={styles.button} onPress={Login} >
        <Text style={styles.text}>Login</Text>
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
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    height: 50,
    width: 100
  },
  accbutton: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 8,
    height: 40,
    width: 200
  },
  input: {
    height: 60,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});