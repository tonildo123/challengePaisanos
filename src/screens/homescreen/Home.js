import {
    View, Text,
    StatusBar,
    SafeAreaView,
    Alert,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    SectionList,
} from 'react-native'
import React from 'react'
import { Paragraph, Appbar } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { PaymentIcon } from 'react-native-payment-icons'
import moment from 'moment';
import { StyleHome } from './StyleHome';
import useHandleCuentas from '../../hooks/useHandleCuentas';
import useHandleTransacciones from '../../hooks/useHandleTransacciones';

const Home = () => {
    let state = useSelector((state) => state)    
    const { cuentas } = useHandleCuentas();
    const {transacciones } = useHandleTransacciones()
    
    return (
        <View style={StyleHome.constainer}>
            <View>
                <Appbar.Header style={StyleHome.styleheader}>
                    <View style={{ flexDirection: 'row', padding: 15 }}>
                        <View style={{ width: '80%' }}>
                            <Text style={StyleHome.txthola}>Hola</Text>
                            <Text style={StyleHome.txtname}
                            >{state.logger.user.name.replace("Soy ", "")}</Text>
                        </View>
                        <View
                            style={StyleHome.styleIcon}>
                            <Ionicons
                                name="notifications-outline"
                                color="#200E32"
                                size={22}
                                style={{ marginHorizontal: 8}}
                            />
                            <Feather
                                name="search"
                                color="#200E32"
                                size={22}
                                style={{ marginHorizontal: 8 }}
                                />
                        </View>
                    </View>
                </Appbar.Header>
                <StatusBar backgroundColor="#000000" barStyle="light-content" />
            </View>

            {cuentas == undefined ? (
                <View
                    style={StyleHome.styleActivityIndicator}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) :
                <SafeAreaView>
                    <ScrollView horizontal={true}>
                        {cuentas.map((item, id) => (
                            <View
                                key={id}
                                style={[StyleHome.card,{backgroundColor: `${item.issuer == "visa" ? "#F9B7B7" : "#005CEE"}`,}]}>
                                <View style={StyleHome.styleHeadercard}>
                                    <Text style={StyleHome.txtBalance}>Balance</Text>
                                    <PaymentIcon
                                        type={item.issuer}
                                        width={50}
                                    />
                                </View>
                                <View style={{ height: '20%', flexDirection: 'row', }}>
                                    <Text style={StyleHome.txtCurrency}
                                    >{item.currency}</Text>
                                    <Text style={StyleHome.txtItemBalance}>{item.balance}</Text>
                                </View>
                                <View style={{ height: '33%', justifyContent: 'center' }}>
                                    <Text style={StyleHome.txtNumCard}>**** **** **** 1234</Text>
                                </View>
                                <View style={StyleHome.stylefootercard}>
                                    <Text style={StyleHome.txtfootercard}>{item.name}</Text>
                                    <Text style={StyleHome.txtExpDate}
                                    >Exp.date {moment(item.expDate).format('MM/DD')}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            }
            <Text style={StyleHome.txtServicios}>Servicios</Text>
            <View
                style={StyleHome.styleServicios}>
                <TouchableOpacity style={StyleHome.buttonServicies}>
                    <Ionicons
                        name="wallet"
                        color="#74CC9B"
                        size={22}
                        style={[StyleHome.styleiconservices, {backgroundColor: '#E4FFF0',}]}
                    />
                    <Paragraph >
                        Billetera
                    </Paragraph>
                </TouchableOpacity>
                <TouchableOpacity style={StyleHome.buttonServicies}>
                    <Ionicons
                        name="swap-vertical"
                        color="#EF9C55"
                        size={22}
                        style={[StyleHome.styleiconservices, {backgroundColor: '#FEEAD4',}]}
                    />
                    <Paragraph >
                        Transferir
                    </Paragraph></TouchableOpacity>
                <TouchableOpacity style={StyleHome.buttonServicies}>

                    <Ionicons
                        name="document-text"
                        color="#B946FF"
                        size={22}
                        style={[StyleHome.styleiconservices, {backgroundColor: '#EEE3FF',}]}
                    />
                    <Paragraph >
                        Pagar
                    </Paragraph></TouchableOpacity>
                <TouchableOpacity style={StyleHome.buttonServicies}>
                    <MaterialCommunityIcons
                        name="cellphone-arrow-down"
                        color="#68C6E5"
                        size={22}
                        style={[StyleHome.styleiconservices, {backgroundColor: '#CAF0FF',}]}
                    />
                    <Paragraph >
                        Recargar
                    </Paragraph>
                </TouchableOpacity>
            </View>
            <Text
                style={StyleHome.txttransferencias}
            >Útltimas Transacciones</Text>

            {
                transacciones == undefined
                    ? <View style={StyleHome.styleActivityIndicator}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                    :
                    <SafeAreaView
                        style={{ flex: 1 }}>
                        <SectionList
                            sections={transacciones}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <View style={{flexDirection: 'row', padding: 15}}>
                                    <Ionicons
                                        name={(item.transactionType == 'SUS') ? 'swap-vertical' : (item.transactionType == 'CASH_IN' ? 'arrow-down' : 'arrow-up')}
                                        color={(item.transactionType == 'SUS') ? '#B946FF' : (item.transactionType == 'CASH_IN' ? '#74CC9B' : '#EF9C55')}
                                        size={22}
                                        style={[StyleHome.styleIcontransferecnia, {backgroundColor: `${(item.transactionType == 'SUS') ? '#F3E4FF' : (item.transactionType == 'CASH_IN' ? '#E4FFF0' : '#FEEAD4')}`,}]}
                                    />
                                    <View style={{ width: '60%', paddingLeft: 8 }}>
                                        <Text style={StyleHome.txttitle}>{item.title}</Text>
                                        <Text style={StyleHome.txttransatype}>{item.transactionType}</Text>
                                    </View>
                                    <Text style={{

                                    }}>$ {item.amount}</Text>
                                </View>
                            )}
                        />
                    </SafeAreaView>
            }

        </View>
    )
}

export default Home