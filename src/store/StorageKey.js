import AsyncStorage from '@react-native-async-storage/async-storage';


const TOKEN_KEY = '@token:key';


export const onSetStorageToken = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token));
        return JSON.stringify(token)
    } catch (error) {
        throw (error)
    }
}

export const onGetStorageToken = async () => {
    try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        return JSON.parse(token);
    } catch (error) {
        throw (error)
    }
}

export const onClearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        throw (error)
    }
}
