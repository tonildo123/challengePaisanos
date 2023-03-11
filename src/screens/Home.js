import {
    View, Text,
    StatusBar,
    SafeAreaView,
    Alert,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect } from 'react'
import {

    Card,
    Title,
    Paragraph,
    useTheme,
    Appbar,
} from 'react-native-paper';
import { Enviroment } from '../enviroment/Enviroment';
import axios from 'axios';

const Home = () => {

    useEffect(() => {

        consultarTarjetas()

    }, [])

    const consultarTarjetas = () => {
        axios.get(
            `${Enviroment.BASE_URL}/${Enviroment.api_cards}`,
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                console.log('respuesta ok2', JSON.stringify(res.data.data, null, 4))
            }
        ).catch(
            (error) => {
                console.log('respuesta 2 no ok', JSON.stringify(error, null, 4))
                Alert.alert('error')
            }
        )
    }


    return (
        <View>
            <View>{/**View de el header */}
                <Appbar.Header
                    style={{ backgroundColor: 'white', alignSelf: 'center' }}>
                    <Appbar.Content title="Hola" />
                    <View
                        style={{ marginRight: 15, flexDirection: 'row' }}
                    >

                    </View>
                </Appbar.Header>
                <StatusBar backgroundColor="#000000" barStyle="light-content" />
            </View>

            <Text>Home</Text>
        </View>
    )
}

export default Home