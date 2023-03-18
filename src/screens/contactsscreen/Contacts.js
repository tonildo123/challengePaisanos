import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ActivityIndicator,
  TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import { StyleContacs } from './StyleContacs';
import useHandleContacts from '../../hooks/useHandleContacts';

const Contacts = ({ navigation }) => {

  const { constactos, constactosfilter } = useHandleContacts();

  return (

    <View style={StyleContacs.constainer}>
      <View style={{ backgroundColor: 'white' }}>{/**View de el header */}
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign
              name="left"
              color="#200E32"
              size={22}
              style={{ marginHorizontal: 18 }}
              onPress={() => { navigation.navigate('Home') }}
            />
            <Text style={StyleContacs.txtContactos}>Contactos</Text>
          </View>
        </Appbar.Header>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
      </View>
      <View style={StyleContacs.styleInput}>
        <AntDesign
          name="search1"
          color="#AAAAAA"
          size={22}
          style={{ paddingHorizontal: 5 }}
        />
        <TextInput
          placeholder="Ingrese un nombre o un numero"
          placeholderTextColor="#AAAAAA"
        >
        </TextInput>
      </View>
      <Text style={StyleContacs.txtRecents}>Recents</Text>
      {
        constactosfilter == undefined
          ? <View style={StyleContacs.activityIndicator}>
            <ActivityIndicator size="large" color="red" />
          </View>
          :
          <SafeAreaView>
            <SectionList
              sections={constactosfilter}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View style={StyleContacs.styleSectionList}>
                  <Text style={StyleContacs.txtname}>{item.name.charAt(0).toUpperCase()} {item.lastName.charAt(0).toUpperCase()}</Text>
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
      <Text style={StyleContacs.txtRecents}>All</Text>
      {
        constactos == undefined
          ? <View style={StyleContacs.activityIndicator}>
            <ActivityIndicator size="large" color="red" />
          </View>
          :
          <SafeAreaView style={{ flex: 1, marginHorizontal: 16, }}>
            <SectionList
              sections={constactos}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View style={StyleContacs.styleSectionList}>
                  <Text style={StyleContacs.txtname}>{item.name.charAt(0).toUpperCase()} {item.lastName.charAt(0).toUpperCase()}</Text>
                  <View style={{ width: '70%', paddingLeft: 8 }}>
                    <Text style={{ color: 'black' }}>{item.name} {item.lastName}</Text>
                    <Text style={{ color: 'black' }}>{item.phone}</Text>
                  </View>

                </View>
              )}
            />
          </SafeAreaView>
      }
    </View>

  );
}


export default Contacts;