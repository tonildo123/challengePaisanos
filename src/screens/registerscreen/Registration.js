import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import useHandleRegister from '../../hooks/useHandleRegister';
import { styleRegister } from './StyleRegister';


const Registration = () => {

    const {handleFormSubmit} = useHandleRegister();

    const [email, setEmail] = useState('soypaisanx@paisanos.io')
    const [password, setPassword] = useState('PAISANX2023!$')
    const [nombre, setNombre] = useState('')

    const handleRegister = () => { handleFormSubmit(nombre, email)}

    const handleChangeEmail = (value) => {setEmail(value)}
    const handleChangePass = (value) => {setPassword(value)}
    const handleChangeNombre = (value) => {setNombre(value)}

    return (
        <View style={styleRegister.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styleRegister.styleImage}

            />
            <Text style={styleRegister.title}>Registro</Text>
            <TextInput
                style={styleRegister.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={(value) => handleChangeNombre(value)}
            />
            <TextInput
                style={styleRegister.input}
                placeholder="Email"
                value={email}
                onChangeText={(value) => handleChangeEmail(value)}
            />
            <TextInput
                style={styleRegister.input}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
                onChangeText={(value) => handleChangePass(value)}
            />
            <TouchableOpacity
                style={styleRegister.button}
                onPress={handleRegister}
            >
                <Text style={styleRegister.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Registration;
