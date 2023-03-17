import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Enviroment } from '../enviroment/Enviroment';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loggearme } from '../store/redux/reduxLogin/LoginSlice';

const Login = ({ navigation }) => {

    const distpach = useDispatch()
    const [email, setEmail] = useState('soypaisanx@paisanos.io');
    const [password, setPassword] = useState('PAISANX2023!$');
    const [toggleCheckBox, setToggleCheckBox] = useState(true)


    const handleLogin = async () => {

        axios.post(
            `${Enviroment.BASE_URL}/${Enviroment.api_login}`,
            {
                email: email,
                password: password
            },
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                const datos = res.data

                if (res.data.success = true) {
                    console.log('respuesta ok2', JSON.stringify(datos, null, 4))
                    let obj = {
                        name: res.data.data.name,                        
                    }

                    distpach(loggearme(obj))
                }


            }
        ).catch(
            (error) => {
                console.log('respuesta 2 no ok', error)
                
            }
        )
    }





    const handleRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerlogin}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{

                        height: 100,
                        width: 134,
                        resizeMode: 'stretch',

                    }}

                />
                <Text
                    style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        // alignSelf:'flex-end'
                        marginTop: 20,
                        color: '#717E95',
                        fontWeight: 'bold',
                    }}

                >Comienza a menjar tu vida financiera</Text>
            </View>

            <View style={styles.containerinputs}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',

                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su email"
                    placeholderTextColor="grey"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',

                    }}
                >Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                >
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
            <View style={styles.containersucess}>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 25,
                    }}
                >
                    <Text
                        style={{
                            color: '#616E7C',
                            fontSize: 18
                        }}
                    >No tienes una cuenta? </Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.buttonTextRegister}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        // justifyContent: 'center',
        backgroundColor: '#F9FAFC',
        flexDirection: 'column'

    },
    containerlogin: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerinputs: {
        flex: 2,
        margin: 10,

    },
    containersucess: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '95%',
        fontSize: 16,
        color:'black'
    },
    button: {
        backgroundColor: '#005CEE',
        padding: 15,
        borderRadius: 10,
        width: '95%'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    buttonTextRegister: {
        color: '#6C8FF8',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18

    },

});

export default Login;
