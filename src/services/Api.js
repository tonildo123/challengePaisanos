/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';

// import { onGetStorageToken, onDeleteStorage } from '../utils/AsyncStorage';
import { Alert } from 'react-native';
import { Enviroment } from '../enviroment/Enviroment';
import { onGetStorageToken } from '../store/StorageKey';

// import { AuthContext } from '../../components/context';

// Create axios client, pre-configured with baseURL


const Api = axios.create({
    baseURL: `${Enviroment.BASE_URL}`,
    headers: { 'x-api-key': `${Enviroment.key}` },
    timeout: 10000,
});

Api.interceptors.response.use(
    response => {
        // Do something with response data
        console.log('ok Api')
        return Promise.resolve(response);
    },
    error => {
        // Do something with response error
        // You can even test for a response code
        // and try a new request before rejecting the promise
        console.log('Dont ok Api', error)
        if (
            error.request._hasError === true &&
            error.request._response.includes('connect')
        ) {
            Alert.alert(
                'Alerta',
                'No se pudo conectar al servidor',
                [{ text: 'OK' }],
                { cancelable: false },
            )
        }


        if (error.response.status === 401 || error.response.status === 400) {
            console.log("La sesión expiró");
            console.log("Api.js linea 41");
            // token expira
            // const { singOut } = useContext(AuthContext);
            Alert.alert(
                'Alerta',
                'La sesión expiró',
                [{ text: 'OK' }]
            )
            // singOut();
        }

        console.log('Ver error.response >>>>>>>>>>', JSON.stringify(error.response, null, 3))
        console.log('Error responde data : >>> ', JSON.stringify(error.response.data, null, 3));

        Alert.alert('Error', 'Expiro la sesión',
            [{ text: 'Ok' }]);

        console.log('error : ', JSON.stringify(error.response.data.exceptionMessage, null, 4))

        return Promise.reject(error);
    }
);

Api.interceptors.request.use(
    async (config) => {
        try {
            return await Promise.resolve(config);
        } catch (error) {
            return await Promise.resolve(error);
        }
    },
    error => {
        console.log("Error Request");
        return Promise.reject(error);
    },
);


export default Api;