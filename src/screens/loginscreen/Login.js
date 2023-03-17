import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { StyleLogin } from './StyleLogin';
import useHandleLogin from '../../hooks/useHandleLogin';

const Login = () => {

    const {handleRegister, handleLogin} = useHandleLogin()    
    const [email, setEmail] = useState('soypaisanx@paisanos.io');
    const [password, setPassword] = useState('PAISANX2023!$');
    const [toggleCheckBox, setToggleCheckBox] = useState(true)    

    return (
        <View style={StyleLogin.container}>
            <View style={StyleLogin.containerlogin}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={StyleLogin.styleImgen}
                />
                <Text style={StyleLogin.textBody}>
                    Comienza a manejar tu vida financiera
                </Text>
            </View>
            <View style={StyleLogin.containerinputs}>
                <Text style={StyleLogin.textSubtitle}>Email</Text>
                <TextInput
                    style={StyleLogin.input}
                    placeholder="Ingrese su email"
                    placeholderTextColor="grey"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={StyleLogin.textSubtitle}
                >Contraseña</Text>
                <TextInput
                    style={StyleLogin.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View style={StyleLogin.styleCheckbox}>
                    <CheckBox
                        tintColor='red'
                        onTintColor='green'
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Recordarme</Text>
                </View>

            </View>
            <View style={StyleLogin.containersucess}>
                <View style={StyleLogin.styleRegister}>
                    <Text
                        style={StyleLogin.txtQuestion}
                    >No tienes una cuenta? </Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={StyleLogin.buttonTextRegister}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={StyleLogin.button} onPress={handleLogin}>
                    <Text style={StyleLogin.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
