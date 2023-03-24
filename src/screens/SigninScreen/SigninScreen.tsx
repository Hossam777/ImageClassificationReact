import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, InputText } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';
import { MainNavigationStackParams } from 'navigation/MainNavigationStack';
import TabBar from '../../components/TabBar';

type Props = {
    navigation: StackNavigationProp<MainNavigationStackParams, 'SigninScreen'>
}

const SigninScreen = (props: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    const toSignup = () => props.navigation.navigate('SignupScreen');
    const login = () => {
        console.log('login')
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../../assets/images/background.png')}
                resizeMode='stretch'>
                <TabBar
                    title='Signin'
                    leftIcon={require('../../assets/images/backward_arrow.png')}
                />
                <Text style={styles.header1}>Hello Back</Text>
                <Text style={styles.header2}>Please Enter E-Mail and Password to Signin</Text>
                <InputText
                    textInputStyle={{ fontSize: 14, color: theme.black }}
                    textAlign={'left'}
                    width={360}
                    height={52}
                    hint='E-Mail'
                    hintColor={theme.gray}
                    borderColor={theme.darkGreen}
                    borderWidth={3}
                    marginTop={47}
                />
                <InputText
                    textInputStyle={{ fontSize: 14, color: theme.black }}
                    textAlign={'left'}
                    width={360}
                    height={52}
                    hint='Password'
                    hintColor={theme.gray}
                    borderColor={theme.darkGreen}
                    borderWidth={3}
                    marginTop={42}
                />
                <Button
                    width={148}
                    height={48}
                    borderRadius={24}
                    textColor={theme.white}
                    marginTop={64}
                    textSize={16}
                    text="Signin"
                    onPress={login}
                />
                <View style={styles.signupView}>
                    <Text style={styles.toSignupTxt}>To Signup Press</Text>
                    <Text style={styles.signupBtn} onPress={toSignup}>Here</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    header1: {
        width: '100%',
        paddingHorizontal: 26,
        fontSize: 40,
        color: '#EC8E31',
    },
    header2: {
        width: '100%',
        paddingHorizontal: 26,
        fontSize: 20,
        color: theme.black,
    },
    signupView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 66,
    },
    toSignupTxt: {
        fontSize: 24,
        color: theme.black,
    },
    signupBtn: {
        color: theme.darkGreen,
        fontSize: 24,
        marginHorizontal: 3,
    },
})

export default SigninScreen;