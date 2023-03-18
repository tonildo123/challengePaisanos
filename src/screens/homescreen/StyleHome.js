import { StyleSheet } from 'react-native'


export const StyleHome = StyleSheet.create({

    constainer: {
        flex: 1
    },
    styleheader: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 15
    },
    txthola: {
        color: "#200E32",
        fontSize: 22,
    },
    txtname: {
        color: "#200E32",
        fontSize: 22,
        fontFamily: 'bold',
        fontWeight: 'bold'
    },
    styleIcon: {
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center'
    },
    styleActivityIndicator: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    card: {
        height: 190,
        width: 318,
        borderRadius: 18,
        marginLeft: 24,
        padding: 10
    },
    styleHeadercard: {
        flexDirection: 'row',
        height: '30%',
    },
    txtBalance : {
        color: 'white',
        fontSize: 18,
        fontFamily: 'bold',
        width: '75%',
    },
    txtCurrency : {
        color: 'white',
        fontSize: 18,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
        padding: 3,
        backgroundColor: '#89A5FB',
        borderRadius: 4
    },
    txtItemBalance : {
        color: 'white',
        fontSize: 18,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 3
    },
    txtNumCard : {
        color: 'white',
        fontSize: 22,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
    },
    stylefootercard : {
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'center',
        
    },
    txtfootercard : {
        color: 'white',
        fontSize: 16,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
        width: '75%',
    },
    txtExpDate : {
        width: '25%',
        color: 'white',
        fontSize: 14,
        fontFamily: 'bold',
        alignSelf: 'flex-end',
    },
    txtServicios : {
        fontSize: 22,
        padding: 10,
        color: 'black',
        fontFamily: 'bold',
    },
    styleServicios : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonServicies : {
        justifyContent: 'center',
        alignItems: 'center',        
    },
    styleiconservices : {
        marginHorizontal: 8,
        padding: 16,        
        borderRadius:15
    },
    txttransferencias : {
        fontSize: 22,
        padding: 10,
        color: 'black',
        fontFamily: 'bold',
        marginTop: 5

    },
    styleIcontransferecnia : {
        marginHorizontal: 8,
        padding: 16,
        borderRadius:15
    },
    txttitle : {
        color: 'black',
        fontSize: 18,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
        padding: 3,
    },
    txttransatype: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'bold',
        alignSelf: 'flex-start',
        padding: 3,
    },

})