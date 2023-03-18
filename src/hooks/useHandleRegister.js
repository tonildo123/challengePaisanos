import { Alert } from "react-native"
const { default: axios } = require("axios")
const { Enviroment } = require("../enviroment/Enviroment")


const useHandleRegister = ()=>{

    const handleFormSubmit = (nombre, email) => {
        axios.post(`${Enviroment.BASE_URL}/${Enviroment.api_auth}`,
        { "name": nombre, "email": email})
        .then((resp) => { Alert.alert('registrado!')})
        .catch((err) => { Alert.alert('Error')})

    }    

    return {handleFormSubmit}
}

export default useHandleRegister