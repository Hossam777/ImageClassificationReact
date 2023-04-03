import React, { useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';
import { MainNavigationStackParams } from 'navigation/MainNavigationStack';

type Props = {
    navigation: StackNavigationProp<MainNavigationStackParams, 'MainScreen'>
}

const MainScreen = (props: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    const onContinuePressed = () => props.navigation.navigate('SigninScreen');

    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.background}
            resizeMode='stretch'
            source={require('../../assets/images/background.png')}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
                <Text style={styles.welcomeText}>Welcome Text</Text>
                <Button
                width={148}
                height={48}
                borderRadius={24}
                textColor={theme.white}
                marginTop={150}
                textSize={16}
                text="Continue"
                onPress={onContinuePressed}
                />
            </ImageBackground>
        </View>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    background: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    logo: {
        marginTop: 76,
        width: 170,
        height: 170,
    },
    welcomeText: {
        marginTop: 100,
        color: theme.gray,
        fontSize: 20,
        justifyContent: 'center',
    },
    button: {
        marginTop: 150,
    }
})

export default MainScreen;