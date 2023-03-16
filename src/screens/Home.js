import {
    View, Text,
    StatusBar,
    SafeAreaView,
    Alert,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SectionList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    Card,
    Title,
    Paragraph,
    useTheme,
    Appbar,
    Divider
} from 'react-native-paper';
import { Enviroment } from '../enviroment/Enviroment';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { PaymentIcon } from 'react-native-payment-icons'
import moment from 'moment';

const Home = () => {
    let state = useSelector((state) => state)

    const [cuentas, setCuentas] = useState();
    const [transacciones, setTransacciones] = useState();
    console.log('cuentas', JSON.stringify(cuentas, null, 4))

    useEffect(() => {
        consultarTarjetas()
        consultarTransacciones()
    }, [])


    const consultarTransacciones = () => {

        axios.get(
            `${Enviroment.BASE_URL}/${Enviroment.api_transactions}`,
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                console.log('transacciones ok', JSON.stringify(res.data.data, null, 4))
                setTransacciones(res.data.data)

                // const transformedData = res.data.data.reduce((result, item) => {
                //     const firstLetter = item.title.charAt(0).toUpperCase();
                //     if (!result[firstLetter]) {
                //         result[firstLetter] = {
                //             title: firstLetter,
                //             data: []
                //         };
                //     }
                //     result[firstLetter].data.push(item);
                //     return result;
                // }, {});

                // const sections = Object.values(transformedData);
                // setTransacciones(sections)
                // console.log('datos : ', JSON.stringify(sections, null, 4))


            }
        ).catch(
            (error) => {
                console.log('transacciones no ok', JSON.stringify(error, null, 4))
                Alert.alert('error')
            }
        )

    }
    const consultarTarjetas = () => {
        axios.get(
            `${Enviroment.BASE_URL}/${Enviroment.api_cards}`,
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                console.log('respuesta ok2', JSON.stringify(res.data.data, null, 4))
                setCuentas(res.data.data)
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
            <View style={{ backgroundColor: 'white' }}>{/**View de el header */}
                <Appbar.Header
                    style={{
                        backgroundColor: 'white',
                        alignSelf: 'center',
                        marginVertical: 15
                    }}>
                    <View style={{ flexDirection: 'row', padding: 15 }}>
                        <View style={{ width: '80%' }}>
                            <Text
                                style={{
                                    color: "#200E32",
                                    fontSize: 22,
                                    // fontFamily: 'bold',                                
                                }}
                            >Hola</Text>
                            <Text
                                style={{
                                    color: "#200E32",
                                    fontSize: 22,
                                    fontFamily: 'bold',
                                    fontWeight: 'bold'
                                }}
                            >{state.logger.user.name}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '20%',
                                alignItems: 'center'
                            }}>
                            <Ionicons
                                name="notifications-outline"
                                color="#200E32"
                                size={22}
                                style={{
                                    marginHorizontal: 8
                                }}
                                onPress={() => console.log('hola icon')}
                            />
                            <Feather
                                name="search"
                                color="#200E32"
                                size={22}
                                style={{
                                    marginHorizontal: 8
                                }}
                                onPress={() => console.log('hola icon')}
                            />
                        </View>
                    </View>
                </Appbar.Header>
                <StatusBar backgroundColor="#000000" barStyle="light-content" />
            </View>
            {cuentas == undefined ? (
                <View
                    style={{
                        flex: 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                    }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) :
                <SafeAreaView>
                    <ScrollView horizontal={true}>
                        {cuentas.map((item, id) => (
                            <View
                                key={id}
                                style={{
                                    height: 190,
                                    width: 318,
                                    backgroundColor: `${item.issuer == "visa" ? "#F9B7B7" : "#005CEE"}`,
                                    borderRadius: 18,
                                    marginLeft: 24,
                                    padding: 10
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        height: '30%',
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 18,
                                            fontFamily: 'bold',
                                            width: '75%',
                                        }}
                                    >Balance</Text>
                                    <PaymentIcon
                                        type={item.issuer}
                                        width={50}
                                    />
                                </View>
                                <View
                                    style={{ height: '20%', flexDirection: 'row', }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 18,
                                            fontFamily: 'bold',
                                            alignSelf: 'flex-start',
                                            padding: 3,
                                            backgroundColor: '#89A5FB',
                                            borderRadius: 4
                                        }}
                                    >{item.currency}</Text>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 18,
                                            fontFamily: 'bold',
                                            alignSelf: 'flex-start',
                                            marginLeft: 3
                                        }}
                                    >{item.balance}</Text>
                                </View>
                                <View
                                    style={{ height: '33%', justifyContent: 'center' }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 22,
                                            fontFamily: 'bold',
                                            alignSelf: 'flex-start',
                                        }}
                                    >**** **** **** 1234</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        height: '20%',
                                        justifyContent: 'center',
                                        // marginBottom:10
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 16,
                                            fontFamily: 'bold',
                                            alignSelf: 'flex-start',
                                            width: '75%',
                                        }}
                                    >{item.name}</Text>
                                    <Text
                                        style={{
                                            width: '25%',
                                            color: 'white',
                                            fontSize: 14,
                                            fontFamily: 'bold',
                                            alignSelf: 'flex-end',
                                        }}
                                    >Exp.date {moment(item.expDate).format('MM/DD')}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            }
            {/* el body  */}
            <View>
                <Text
                    style={{
                        fontSize: 22,
                        padding: 10,
                        color: 'black',
                        fontFamily: 'bold',

                    }}
                >Servicios</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Ionicons
                            name="wallet"
                            color="#74CC9B"
                            size={22}
                            style={{
                                marginHorizontal: 8,
                                padding: 16,
                                backgroundColor: '#E4FFF0'
                            }}
                            onPress={() => console.log('hola icon')}
                        />
                        <Paragraph >
                            Billetera
                        </Paragraph>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Ionicons
                            name="swap-vertical"
                            color="#EF9C55"
                            size={22}
                            style={{
                                marginHorizontal: 8,
                                padding: 16,
                                backgroundColor: '#FEEAD4'
                            }}
                            onPress={() => console.log('hola icon')}
                        />
                        <Paragraph >
                            Transferir
                        </Paragraph></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <Ionicons
                            name="document-text"
                            color="#B946FF"
                            size={22}
                            style={{
                                marginHorizontal: 8,
                                padding: 16,
                                backgroundColor: '#EEE3FF'
                            }}
                            onPress={() => console.log('hola icon')}
                        />
                        <Paragraph >
                            Pagar
                        </Paragraph></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <MaterialCommunityIcons
                            name="cellphone-arrow-down"
                            color="#68C6E5"
                            size={22}
                            style={{
                                marginHorizontal: 8,
                                padding: 16,
                                backgroundColor: '#CAF0FF'
                            }}
                            onPress={() => console.log('hola icon')}
                        />
                        <Paragraph >
                            Recargar
                        </Paragraph>
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
            <Text
                style={{
                    fontSize: 22,
                    padding: 10,
                    color: 'black',
                    fontFamily: 'bold',
                    marginTop: 5

                }}
            >Útltimas Transacciones</Text>

            {
                transacciones == undefined
                    ? <View
                        style={{
                            flex: 0.3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                        }}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                    : <SafeAreaView>

                        <ScrollView>
                            {transacciones.map((item, id) => (

                                <View
                                    key={id}
                                    style={{
                                        flexDirection: 'row',
                                        padding: 15
                                    }}
                                ><Ionicons
                                        name={(item.transactionType == 'SUS') ? 'swap-vertical' : (item.transactionType == 'CASH_IN' ? 'arrow-down' : 'arrow-up')}
                                        color={(item.transactionType == 'SUS') ? '#B946FF' : (item.transactionType == 'CASH_IN' ? '#74CC9B' : '#EF9C55')}
                                        size={22}
                                        style={{
                                            marginHorizontal: 8,
                                            padding: 16,
                                            backgroundColor: `${(item.transactionType == 'SUS') ? '#F3E4FF' : (item.transactionType == 'CASH_IN' ? '#E4FFF0' : '#FEEAD4')}`
                                        }}
                                        onPress={() => console.log('hola icon')}
                                    />
                                    <View style={{ width: '60%', paddingLeft: 8 }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 18,
                                                fontFamily: 'bold',
                                                alignSelf: 'flex-start',
                                                padding: 3,
                                            }}
                                        >{item.title}</Text>
                                        <Text
                                            style={{
                                                color: 'grey',
                                                fontSize: 12,
                                                fontFamily: 'bold',
                                                alignSelf: 'flex-start',
                                                padding: 3,
                                            }}
                                        >{item.transactionType}</Text>
                                    </View>
                                    <Text>$ {item.amount}</Text>
                                </View>
                            ))}
                        </ScrollView>

                    </SafeAreaView>
            }
        </View>
    )
}

export default Home