import React, { useState,useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image, Picker } from 'react-native';
import { db, getAuth, createUserWithEmailAndPassword, addDoc, collection, onSnapshot, doc, setDoc } from '../Navigator/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GlobalContext } from '../context/Context';

export default function Home({ navigation }) {

    const [name, setname] = useState('');
    const [fname, setfname] = useState('');
    const [email, setemail] = useState('');
    const [dob, setdob] = useState('');
    const [fmember, setfmember] = useState('');
    const [income, setincome] = useState('');
    const [cnic, setcnic] = useState('');
    const [selectedValue, setSelectedValue] = useState('')

    // const { state, dispatch } = useContext(GlobalContext);
    // console.log(state)

    const Rashan = async () => {

        try {
            // console.log(state?.authUser)
            let dataRef = doc(db, 'Rashan','BHCwUunfX1280jX5l86LJKQNYBy1')
            await setDoc(dataRef, {
                name: name,
                fname: fname,
                email: email,
                dob: dob,
                fmember: fmember,
                income: income,
                // uid: state?.authUser?.email,
                rashan: selectedValue,
                cnic: cnic,
            });

        } catch (err) {
            console.log(err.message)
        }

    }


    return (

        <View style={styles.container}>
            <h1>Rashan Request</h1>
            <TextInput style={styles.input} onChange={(e) => setname(e.target.value)} placeholder="Name" />
            <TextInput style={styles.input} onChange={(e) => setfname(e.target.value)} placeholder="Father Name" />
            <TextInput style={styles.input} onChange={(e) => setemail(e.target.value)} placeholder="email" />
            <TextInput style={styles.input} onChange={(e) => setcnic(e.target.value)} placeholder="cnic" />
            <TextInput style={styles.input} onChange={(e) => setdob(e.target.value)} placeholder="Date Of Birth" />
            <TextInput style={styles.input} onChange={(e) => setfmember(e.target.value)} placeholder="Family members" />
            <TextInput style={styles.input} onChange={(e) => setincome(e.target.value)} placeholder="Income" />

            <Picker
                selectedValue={selectedValue}
                style={styles.dropdown}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Monthly Ration" value="Monthly Ration" />
                <Picker.Item label="Daily 1 Time Food" value="Daily 1 Time Food" />
                <Picker.Item label="Daily 2 Time Food" value="Daily 2 Time Food" />
                <Picker.Item label="Daily 3 Time Food" value="Daily 3 Time Food" />
            </Picker>

            <Pressable style={styles.button} onPress={Rashan} >
                <Text style={styles.text}>Confirm Request</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: {
        alignItems: "center",
        backgroundColor: "green",
        color: "white",
        padding: 10,
        borderRadius: 15,
        width: 200,

    },
    input: {
        height: 40,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    },
    text: {
        color: "white",
        borderRadius: 15,
    },
    dropdown:{
        height: 45,
        width: 250,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    }
});