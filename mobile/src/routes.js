//React
import React from 'react';

//Native
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Incidents from './pages/Incidents';
import Details from './pages/Details';

const AppStack = createStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={"Incidents"} component={Incidents} />
                <AppStack.Screen name={"Details"} component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}