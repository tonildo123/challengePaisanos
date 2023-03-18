import axios from "axios";
import React, { useEffect, useState } from "react";
import { Enviroment } from "../enviroment/Enviroment";

const useHandleCuentas = () =>{

    const [cuentas, setCuentas] = useState();  
    
    useEffect(() => {
        consultarTarjetas();
    }, [])
    
    

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

    return { cuentas }

}

export default useHandleCuentas;