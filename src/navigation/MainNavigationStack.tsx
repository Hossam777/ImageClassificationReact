import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { MainScreen, SignupScreen, SigninScreen } from 'screens';

const Stack = createStackNavigator();

export type MainNavigationStackParams = {
    MainScreen: undefined,
    SignupScreen: undefined,
    SigninScreen: undefined,
}

export default () => {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MainScreen'>
                    <Stack.Screen name='MainScreen' key='MainScreen' component={MainScreen} />
                    <Stack.Screen name='SignupScreen' key='SignupScreen' component={SignupScreen} />
                    <Stack.Screen name='SigninScreen' key='SigninScreen' component={SigninScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
} 