import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

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