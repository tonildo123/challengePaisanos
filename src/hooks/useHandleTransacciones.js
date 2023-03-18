import axios from "axios";
import React, { useEffect, useState } from "react";
import { Enviroment } from "../enviroment/Enviroment";

const useHandleTransacciones = () =>{

    const [transacciones, setTransacciones] = useState();
    
    useEffect(() => {
        consultarTransacciones();
    }, [])
    
    

    const consultarTransacciones = () => {

        axios.get(
            `${Enviroment.BASE_URL}/${Enviroment.api_transactions}`,
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                console.log('transacciones home 2', JSON.stringify(res.data.data, null, 4))
                // setTransacciones(res.data.data)

                const transformedData = res.data.data.reduce((result, item) => {
                    const firstLetter = item.title.charAt(0).toUpperCase();
                    if (!result[firstLetter]) {
                        result[firstLetter] = {
                            title: firstLetter,
                            data: []
                        };
                    }
                    result[firstLetter].data.push(item);
                    return result;
                }, {});

                const sections = Object.values(transformedData);
                setTransacciones(sections)
                console.log('transacciones section : ', JSON.stringify(sections, null, 4))


            }
        ).catch(
            (error) => {
                console.log('transacciones no ok', JSON.stringify(error, null, 4))
                Alert.alert('error')
            }
        )

    }
    
    return { transacciones }

}

export default useHandleTransacciones;