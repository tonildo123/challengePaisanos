import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Enviroment } from '../enviroment/Enviroment';


const Registration = () => {


    const key = "zjQVY+b1V0_VARVy47f+H5C0JZMK.ZUp"
    const [email, setEmail] = useState('soypaisanx@paisanos.io')
    const [password, setPassword] = useState('PAISANX2023!$')
    const [nombre, setNombre] = useState('')




    const handleFormSubmit = () => {

        axios.post(`${Enviroment.BASE_URL}/${Enviroment.api_auth}`, {
            "name": nombre,
            "email": email
        }).then((resp) => {
            console.log('respuesta ', JSON.stringify(resp.data, null, 3))

        }).catch((err) => {
            console.log(err)
        })

    }

    const handleChangeEmail = (value) => {
        setEmail(value)
    }

    const handleChangePass = (value) => {
        setPassword(value)
    }

    const handleChangeNombre = (value) => {
        setNombre(value)
    }


    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={{
                    height: 100,
                    width: 134,
                    resizeMode: 'stretch',
                    margin: 20
                }}

            />
            <Text style={styles.title}>Registro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={(value) => handleChangeNombre(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(value) => handleChangeEmail(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
                onChangeText={(value) => handleChangePass(value)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleFormSubmit}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F9FAFC',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#005CEE',
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Registration;
