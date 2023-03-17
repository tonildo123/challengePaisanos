import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Enviroment } from '../enviroment/Enviroment';
import { loggearme } from '../store/redux/reduxLogin/LoginSlice';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const useHandleLogin = () => {
  
  const navigation = useNavigation();
  const distpach = useDispatch()
  const [email, setEmail] = useState('soypaisanx@paisanos.io');
  const [password, setPassword] = useState('PAISANX2023!$');

  const handleLogin = async () => {

      axios.post(
          `${Enviroment.BASE_URL}/${Enviroment.api_login}`,
          { email: email, password: password},
          { headers: { 'x-api-key': `${Enviroment.key}` },})
          .then((res) => {             

              if (res.data.success = true) {                  
                  let obj = { name: res.data.data.name,}
                  distpach(loggearme(obj))
              }
          }
      ).catch((error) => {Alert.alert('Error al loggearse')}
      )
  }
  const handleRegister = () => {
    navigation.navigate('Register')
  }


  return {
   handleLogin,
   handleRegister
  }

}

export default useHandleLogin