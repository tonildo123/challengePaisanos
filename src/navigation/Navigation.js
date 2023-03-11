import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottonTab } from './BottonTab';
import InitStack from './InitStack';
import { useSelector } from 'react-redux'

const Navigation = () => {

    let state = useSelector((state) => state)
    console.log('navigation', state)

    return (
        <NavigationContainer>
            {
                state.logger.user.logged
                    ? <BottonTab />
                    : <InitStack />
            }
        </NavigationContainer>
    );
}

export default Navigation