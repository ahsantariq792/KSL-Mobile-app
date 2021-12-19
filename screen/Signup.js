import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { db, getAuth, createUserWithEmailAndPassword, addDoc, collection, onSnapshot, doc, setDoc } from '../Navigator/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Signup({ navigation }) {

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const Register = async () => {
    try {
      let auth = getAuth()

      let { user } = await createUserWithEmailAndPassword(auth, email, password);

      let dataRef = doc(db, 'signup user', user.uid)

      await setDoc(dataRef, {
        email: user.email,
        password:password,
        uid: user.uid,
      });
      navigation.navigate('Signin')
    } catch (err) {
      console.log(err.message)
    }

  }


  return (

    <View style={styles.container}>
      {/* <Image source={require('../Images/logo.png')} style={styles.pic}/> */}
      <TextInput style={styles.input} onChange={(e) => setname(e.target.value)} placeholder="Enter your name" />
      <TextInput style={styles.input} onChange={(e) => setphone(e.target.value)} placeholder="Enter your phone" />
      <TextInput style={styles.input} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" />
      <TextInput secureTextEntry={true}  style={styles.input} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
      <Pressable style={styles.button} onPress={Register} >
        <Text style={styles.text}>Register</Text>
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