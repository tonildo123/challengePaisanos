import { StyleSheet } from "react-native";

export const StyleContacs = StyleSheet.create({
    constainer :{
        flex: 1,
        backgroundColor: '#F8F9F9'
      },
      txtContactos :{
        color: "#334154",
        fontSize: 22,                
        fontWeight: 'bold'
      },
      styleInput : {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#EAEDED',
        padding: 10,
        alignItems: 'center'
      },
      txtRecents : {
        color: '#AAAAAA',
        padding: 10,
        fontSize: 18
      },
      activityIndicator : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      styleSectionList : {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#EAEDED',
        padding: 10,
        alignItems: 'center'
      },
      txtname : {
        marginHorizontal: 8,
        padding: 16,
        backgroundColor: '#CAF0FF',
        color: '#68C6E5',
        borderRadius: 14
      },
})