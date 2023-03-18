import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Enviroment } from '../enviroment/Enviroment';

const useHandleContacts = () => {
    const [constactos, setconstactos] = useState()
    const [constactosfilter, setconstactosfilter] = useState()

    useEffect(() => {
        consultarContactos()
    }, [])


    const consultarContactos = () => {

        axios.get(
            `${Enviroment.BASE_URL}/${Enviroment.api_contact}`,
            { headers: { 'x-api-key': `${Enviroment.key}` }, }

        ).then(
            (res) => {
                const transformedData = res.data.data.reduce((result, item) => {
                    const firstLetter = item.name.charAt(0).toUpperCase();
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
                setconstactos(sections)
                const filteredArray = sections.slice(0, 2).filter((item, index) => {
                    return index < 2;
                });
                setconstactosfilter(filteredArray)
            }
        ).catch(
            (error) => {
                Alert.alert('error')
            }
        )

    }

    return { constactosfilter, constactos }

}

export default useHandleContacts