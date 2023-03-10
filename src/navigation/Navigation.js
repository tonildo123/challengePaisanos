import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Login';
import Home from '../Home';
import Contacts from '../Contacts';
import Registration from '../Registration';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{title:'', headerShown:false}} />
                <Stack.Screen name="Contactos" component={Contacts} options={{ title: '' }} />
                <Stack.Screen name="Register" component={Registration} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation