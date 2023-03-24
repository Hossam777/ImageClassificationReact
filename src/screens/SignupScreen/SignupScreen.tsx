import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, InputText } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';
import { MainNavigationStackParams } from 'navigation/MainNavigationStack';
import TabBar from '../../components/TabBar';

type Props = {
    navigation: StackNavigationProp<MainNavigationStackParams, 'SignupScreen'>
}

const SignupScreen = (props: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);

    const signup = () => {}
    return (
        <View style={styles.container}>
            <ImageBackground 
            style={styles.background}
            source={require('../../assets/images/background.png')}
            resizeMode='stretch'>
                <TabBar 
                title='Signup'
                leftIcon={require('../../assets/images/backward_arrow.png')}
                />
                <Text style={styles.header1}>Welcome</Text>
                <Text style={styles.header2}>Please Enter your Details to Signup</Text>
                <View style={styles.nameView}>
                    <InputText
                        textInputStyle={{fontSize: 14, color: theme.black}}
                        textAlign= {'left'}
                        width={164}
                        height={52}
                        hint='Name'
                        hintColor={theme.gray}
                        borderColor={theme.darkGreen}
                        borderWidth={3}
                    />
                    <InputText
                        textInputStyle={{fontSize: 14, color: theme.black}}
                        textAlign= {'left'}
                        width={164}
                        height={52}
                        hint='Title'
                        hintColor={theme.gray}
                        borderColor={theme.darkGreen}
                        borderWidth={3}
                    />
                </View>
                <InputText
                    textInputStyle={{fontSize: 14, color: theme.black}}
                    textAlign= {'left'}
                    width={340}
                    height={52}
                    hint='E-Mail'
                    hintColor={theme.gray}
                    borderColor={theme.darkGreen}
                    borderWidth={3}
                    marginTop={40}
                />
                <InputText
                    textInputStyle={{fontSize: 14, color: theme.black}}
                    textAlign= {'left'}
                    width={340}
                    height={52}
                    hint='Password'
                    hintColor={theme.gray}
                    borderColor={theme.darkGreen}
                    borderWidth={3}
                    marginTop={40}
                />
                <InputText
                    textInputStyle={{fontSize: 14, color: theme.black}}
                    textAlign= {'left'}
                    width={340}
                    height={52}
                    hint='Confirm Password'
                    hintColor={theme.gray}
                    borderColor={theme.darkGreen}
                    borderWidth={3}
                    marginTop={40}
                />
                <Button
                    width={148}
                    height={48}
                    borderRadius={24}
                    textColor={theme.white}
                    marginTop={67}
                    textSize={16}
                    text="Create Account"
                    onPress={signup}
                />
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
    nameView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        marginTop: 55,
    },
})

export default SignupScreen;