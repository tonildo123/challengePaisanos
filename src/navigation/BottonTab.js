import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';

const Tab = createBottomTabNavigator();

export const BottonTab = ()=> {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contactos" component={Contacts} />
      </Tab.Navigator>
    
  );
}