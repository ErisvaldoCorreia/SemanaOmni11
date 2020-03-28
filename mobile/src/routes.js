import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main/index';
import Detail from './pages/detail/index';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name='Main' component={Main} />
            <AppStack.Screen name='Detail' component={Detail} />
        </AppStack.Navigator>
    </NavigationContainer>
    )
}