import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Registration from '../screens/Registration';
import Login from '../screens/loginscreen/Login';

const Stack = createNativeStackNavigator();

function InitStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerShown: false }} />
            <Stack.Screen name="Register" component={Registration} options={{ title: '' }} />
        </Stack.Navigator>

    );
}

export default InitStack;