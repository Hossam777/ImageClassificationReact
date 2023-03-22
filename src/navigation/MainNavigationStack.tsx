import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { MainScreen } from 'screens';

const Stack = createStackNavigator();

export type MainNavigationStackParams = {
    MainScreen: undefined
}

export default () => {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MainScreen'>
                    <Stack.Screen name='MainScreen' key='MainScreen' component={MainScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
} 