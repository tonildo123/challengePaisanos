import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ActivityIndicator,
  TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Card,
  Title,
  Paragraph,
  useTheme,
  Appbar,
  Divider
} from 'react-native-paper';
import { Enviroment } from '../enviroment/Enviroment';

const Contacts = ({ navigation }) => {

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
        console.log('contactos ok', JSON.stringify(res.data.data, null, 4))


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
        console.log('datos : ', JSON.stringify(sections, null, 4))
        
        const filteredArray = sections.slice(0, 2).filter((item, index) => {
          return index < 2;
        });
        
        console.log(JSON.stringify(filteredArray, null, 4));

        setconstactosfilter(filteredArray)
      }
    ).catch(
      (error) => {
        console.log('contactos no ok', JSON.stringify(error, null, 4))
        Alert.alert('error')
      }
    )

  }


  return (

    <View style={{
      flex: 1,
      backgroundColor: '#F8F9F9'
    }}>
      <View style={{ backgroundColor: 'white' }}>{/**View de el header */}
        <Appbar.Header
          style={{
            backgroundColor: 'white',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <AntDesign
              name="left"
              color="#200E32"
              size={22}
              style={{
                marginHorizontal: 18
              }}
              onPress={() => { navigation.navigate('Home') }}
            />
            <Text
              style={{
                color: "#334154",
                fontSize: 22,
                // fontFamily: 'bold',
                fontWeight: 'bold'
              }}
            >Contactos</Text>
          </View>
        </Appbar.Header>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
      </View>
       <View
       style={{
        flexDirection:'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#EAEDED',
        padding: 10,
        alignItems: 'center'
      }}
       >
        <AntDesign
          name="search1"
          color="#AAAAAA"
          size={22}
          style={{
            paddingHorizontal: 5,
          }}
          onPress={() => { console.log('buscar') }}
        />

       <TextInput
        placeholder="Ingrese un nombre o un numero"
        placeholderTextColor="#AAAAAA"
        >
        
      </TextInput>
        </View>       
      
      <Text
      style={{
        color:'#AAAAAA',
        padding:10,
        fontSize:18
      }}
      >Recents</Text>
       {
        constactosfilter == undefined
          ? <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <ActivityIndicator size="large" color="red" />
          </View>
          :
          <SafeAreaView style={{

          }}>
            <SectionList
              sections={constactosfilter}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View
                  style={{ flexDirection:'row',
                  backgroundColor: 'white',
                  margin: 10,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: '#EAEDED',
                  padding: 10,
                  alignItems: 'center' }}
                >
                  <Text style={{
                    marginHorizontal: 8,
                    padding: 16,
                    backgroundColor: '#CAF0FF',
                    color:'#68C6E5',
                    borderRadius:14
                  }}>{item.name.charAt(0).toUpperCase()} {item.lastName.charAt(0).toUpperCase()}</Text>
                  <View
                    style={{ width: '70%', paddingLeft: 8 }}
                  >
                    <Text style={{ color: 'black' }}>{item.name} {item.lastName}</Text>
                    <Text style={{ color: 'black' }}>{item.phone}</Text>
                  </View>

                </View>
              )}
              
            />

          </SafeAreaView>

      }
      
      <Text
      style={{
        color:'#AAAAAA',
        padding:10,
        fontSize:18
      }}
      >All</Text>
      {
        constactos == undefined
          ? <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <ActivityIndicator size="large" color="red" />
          </View>
          :
          <SafeAreaView style={styles.container}>
            <SectionList
              sections={constactos}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View
                  style={{flexDirection:'row',
                  backgroundColor: 'white',
                  margin: 10,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: '#EAEDED',
                  padding: 10,
                  alignItems: 'center' }}
                >
                  <Text style={{
                    marginHorizontal: 8,
                    padding: 16,
                    backgroundColor: '#CAF0FF',
                    color:'#68C6E5',
                    borderRadius:14
                  }}>{item.name.charAt(0).toUpperCase()} {item.lastName.charAt(0).toUpperCase()}</Text>
                  <View
                    style={{ width: '70%', paddingLeft: 8 }}
                  >
                    <Text style={{ color: 'black' }}>{item.name} {item.lastName}</Text>
                    <Text style={{ color: 'black' }}>{item.phone}</Text>
                  </View>

                </View>
              )}
              // renderSectionHeader={({ section: { title } }) => (
              //   <Text style={{ color: 'black' }}>{title}</Text>
              // )} esto mostraba la letra de los contactos
            />

          </SafeAreaView>


      }

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Contacts;