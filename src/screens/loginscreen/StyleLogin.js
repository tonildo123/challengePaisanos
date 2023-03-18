import { StyleSheet } from "react-native";

export const StyleLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        // justifyContent: 'center',
        backgroundColor: '#F9FAFC',
        flexDirection: 'column'

    },
    containerlogin: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerinputs: {
        flex: 2,
        margin: 10,

    },
    containersucess: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '95%',
        fontSize: 16,
        color: 'black'
    },
    button: {
        backgroundColor: '#005CEE',
        padding: 15,
        borderRadius: 10,
        width: '95%'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    buttonTextRegister: {
        color: '#6C8FF8',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18

    },
    styleImgen: {
        height: 100,
        width: 134,
        resizeMode: 'stretch',
    },
    textBody: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        color: '#717E95',
        fontWeight: 'bold',
    },
    textSubtitle: {
        color: '#334154',
        fontWeight: 'bold',
    },
    styleCheckbox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    styleRegister: {
        flexDirection: 'row',
        padding: 25,
    },
    txtQuestion: {
        color: '#616E7C',
        fontSize: 18
    },

})