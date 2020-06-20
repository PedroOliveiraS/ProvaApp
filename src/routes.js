
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Home from './pages/Main';
//import HomeRacas from './pages/Racas'
import HomeClasses from './pages/Main'
//import DetailsRacas from './pages/Racas/Details'
import DetailsClasses from './pages/Classes'
//import DetailsClasses from './pages/Classes/Details'
//import DetailsRacas from './pages/Racas/Details'

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                
            >
                
                <Stack.Screen name="Página Inicial: Classes" component={HomeClasses} />
                <Stack.Screen name="Detalhes: Classes" component={DetailsClasses} />
            </Stack.Navigator>
        </NavigationContainer>


    );
}