import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { unlogger } from '../store/redux/reduxLogin/LoginSlice';

const Tab = createBottomTabNavigator();

export const BottonTab = () => {

    const distpach = useDispatch()

    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "", 
                    tabBarStyle: { height: 60 },
                    tabBarIcon: ({focused}) => (
                        <AntDesign
                            name="home"
                            color={focused ? '#6C8FF8':'#200E32'}
                            size={30}
                            style={{
                                marginHorizontal: 8
                            }}
                            // onPress={()=>console.log('hola icon')}
                        />
                    ),
                }} />
            <Tab.Screen
                name="Contactos"
                
                component={Contacts}
                options={{
                    tabBarLabel: "", 
                    tabBarStyle: { height: 60 },
                    tabBarIcon: ({focused}) => (
                        <Octicons
                            name="note"
                            color={focused ? '#6C8FF8':'#200E32'}
                            size={30}
                            style={{
                                marginHorizontal: 8
                            }}
                            // onPress={()=>console.log('hola icon')}
                        />
                    ),
                }} />
                <Tab.Screen
                name="Salir"
                component={()=>null}
                options={{
                    tabBarLabel: "", 
                    tabBarStyle: { height: 60 },
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="log-out-outline"
                            color={focused ? '#6C8FF8':'#200E32'}
                            size={30}
                            style={{
                                marginHorizontal: 8,
                                padding: 8,
                            }}
                            onPress={()=>{distpach(unlogger())}}
                        />
                    ),
                }} />
        </Tab.Navigator>

    );
}