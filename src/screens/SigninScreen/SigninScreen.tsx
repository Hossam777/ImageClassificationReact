import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, InputText } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';
import { MainNavigationStackParams } from 'navigation/MainNavigationStack';
import TabBar from '../../components/TabBar';
import { validateEmailAndGetErrorMessage, validatePasswordAndGetErrorMessage } from '../../utils/Validator';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    navigation: StackNavigationProp<MainNavigationStackParams, 'SigninScreen'>
}

const SigninScreen = (props: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const toSignup = () => props.navigation.navigate('SignupScreen');
    const login = () => {
        console.log('login')
    }
    const goBack = () => props.navigation.goBack();
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../assets/images/background.png')}
            resizeMode='stretch'>
            <TabBar
                title='Signin'
                leftIcon={require('../../assets/images/backward_arrow.png')}
                leftIconPress={goBack}
            />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header1}>Hello Back</Text>
                    <Text style={styles.header2}>Please Enter E-Mail and Password to Signin</Text>
                    <InputText
                        textInputStyle={{ fontSize: 14, color: theme.black }}
                        textAlign={'left'}
                        containerStyle={styles.textInputFullWidth}
                        hint='E-Mail'
                        hintColor={theme.gray}
                        onChangeText={onChangeEmail}
                        value={email}
                        validator={validateEmailAndGetErrorMessage}
                    />
                    <InputText
                        textInputStyle={{ fontSize: 14, color: theme.black }}
                        textAlign={'left'}
                        containerStyle={styles.textInputFullWidth}
                        hint='Password'
                        hintColor={theme.gray}
                        onChangeText={onChangePassword}
                        value={password}
                        validator={validatePasswordAndGetErrorMessage}
                    />
                    <Button
                        width={148}
                        height={48}
                        borderRadius={24}
                        textColor={theme.white}
                        marginTop={64}
                        textSize={16}
                        text="Signin"
                        alignSelf='center'
                        onPress={login}
                    />
                    <View style={styles.signupView}>
                        <Text style={styles.toSignupTxt}>To Signup Press</Text>
                        <Text style={styles.signupBtn} onPress={toSignup}>Here</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
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
        marginBottom: 20,
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
    textInputFullWidth: {
        width: 340,
        height: 52,
        borderColor: theme.darkGreen,
        borderWidth: 3,
        marginTop: 45,
        alignSelf: 'center',
    },
})

export default SigninScreen;