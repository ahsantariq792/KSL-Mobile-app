import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import { signInWithEmailAndPassword, auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/context';
import { RadioButton } from 'react-native-paper';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState('')

    const navigation = useNavigation()

    const { state, dispatch } = useContext(GlobalContext);

    const toRegister = () => {
        navigation.navigate("Register")
    }

    const LoginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN_USER", payload: user });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        if (role === 'manager') {
            const docRef = doc(db, "manager",);

        } else if (role === 'applicant') {

        }


    }

    return (

        <SafeAreaView style={styles.container} behavior="padding">
            <Image source={require('../../assets/Logo-KSKL.png')} style={{ width: 205, height: 100 }} />
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Email Address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.role}>Role :</Text>
                <View style={styles.radio}>
                    <Text>Applicant</Text>
                    <RadioButton
                        // value={role}
                        // status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setRole('applicant')}
                    />
                </View>
                <View style={styles.radio}>
                    <Text>Branch Manager</Text>
                    <RadioButton
                        // value={role}
                        // status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setRole('manager')}
                    >
                        <Text>Branch Manager</Text>
                    </RadioButton>
                </View>
                <View style={styles.radio}></View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { console.log(role) }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText1} onPress={LoginUser()}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.buttonText2} onPress={toRegister}>Register Here</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
        height: 40,
    },
    heading: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black'
    },
    buttonContainer: {
        padding: 20,
    },
    button: {
        backgroundColor: '#0782f9',
        marginVertical: 10,
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
    },
    buttonText1: {
        color: 'white',
        fontWeight: '500'
    },
    buttonText2: {
        color: '#0782f9',
    },
    role: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    radio: {
        width: 200,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    }
})