import { StyleSheet } from "react-native";

export const styleRegister = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F9FAFC',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#005CEE',
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    styleImage:{
        height: 100,
        width: 134,
        resizeMode: 'stretch',
        margin: 20
    },
})