import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { Enviroment } from '../enviroment/Enviroment';

const Contacts = () => {

  const [constactos, setconstactos] = useState()

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
      flex: 1

    }}>
      <Text>Contactos header</Text>
      <Text>Buscador</Text>
      <Text>Recents</Text>
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
                  style={{ flexDirection: 'row', padding: 15 }}
                >
                  <Text style={{
                    marginHorizontal: 8,
                    padding: 16,
                    backgroundColor: '#E4FFF0'
                  }}>{item.name.charAt(0).toUpperCase()} {item.lastName.charAt(0).toUpperCase()}</Text>
                  <View
                  style={{ width: '70%', paddingLeft: 8 }}
                  >
                  <Text style={{ color: 'black' }}>{item.name} {item.lastName}</Text>
                  <Text style={{ color: 'black' }}>{item.phone}</Text>
                  </View>
                  
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={{ color: 'black' }}>{title}</Text>
              )}
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