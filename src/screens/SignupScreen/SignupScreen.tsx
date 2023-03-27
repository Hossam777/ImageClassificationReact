import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, InputText } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';
import { MainNavigationStackParams } from 'navigation/MainNavigationStack';
import TabBar from '../../components/TabBar';
import { validateConfirmPasswordAndGetErrorMessage, validateEmailAndGetErrorMessage, validateNameAndGetErrorMessage, validatePasswordAndGetErrorMessage } from '../../utils/Validator';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    navigation: StackNavigationProp<MainNavigationStackParams, 'SignupScreen'>
}

const SignupScreen = (props: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    const goBack = () => props.navigation.goBack()
    const [forceValidate, onChangeForceValidate] = useState('');
    const [name, onChangeName] = useState('');
    const [title, onChangeTitle] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const signup = () => {
        onChangeForceValidate(forceValidate + "1")
    }
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../assets/images/background.png')}
            resizeMode='stretch'>
            <TabBar
                title='Signup'
                leftIcon={require('../../assets/images/backward_arrow.png')}
                leftIconPress={goBack}
            />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header1}>Welcome</Text>
                    <Text style={styles.header2}>Please Enter your Details to Signup</Text>
                    <View style={styles.nameView}>
                        <InputText
                            textInputStyle={{ fontSize: 14, color: theme.black }}
                            textAlign={'left'}
                            containerStyle={styles.textInputSmallWidth}
                            hint='Name'
                            hintColor={theme.gray}
                            onChangeText={onChangeName}
                            value={name}
                            validator={validateNameAndGetErrorMessage}
                            forceValidation={forceValidate}
                        />
                        <InputText
                            textInputStyle={{ fontSize: 14, color: theme.black }}
                            textAlign={'left'}
                            hint='Title'
                            hintColor={theme.gray}
                            containerStyle={styles.textInputSmallWidth}
                            onChangeText={onChangeTitle}
                            value={title}
                            validator={validateNameAndGetErrorMessage}
                            forceValidation={forceValidate}
                        />
                    </View>
                    <InputText
                        textInputStyle={{ fontSize: 14, color: theme.black }}
                        textAlign={'left'}
                        containerStyle={styles.textInputFullWidth}
                        hint='E-Mail'
                        hintColor={theme.gray}
                        onChangeText={onChangeEmail}
                        value={email}
                        validator={validateEmailAndGetErrorMessage}
                        forceValidation={forceValidate}
                    />
                    <InputText
                        textInputStyle={{ fontSize: 14, color: theme.black }}
                        textAlign={'left'}
                        hint='Password'
                        hintColor={theme.gray}
                        containerStyle={styles.textInputFullWidth}
                        onChangeText={onChangePassword}
                        value={password}
                        validator={validatePasswordAndGetErrorMessage}
                        forceValidation={forceValidate}
                    />
                    <InputText
                        textInputStyle={{ fontSize: 14, color: theme.black }}
                        textAlign={'left'}
                        hint='Confirm Password'
                        hintColor={theme.gray}
                        containerStyle={styles.textInputFullWidth}
                        onChangeText={onChangeConfirmPassword}
                        value={confirmPassword}
                        forceValidation={forceValidate}
                        confirmPasswordValidator={validateConfirmPasswordAndGetErrorMessage}
                        password={password}
                    />
                    <Button
                        width={148}
                        height={48}
                        borderRadius={24}
                        textColor={theme.white}
                        marginTop={67}
                        textSize={16}
                        alignSelf= 'center'
                        marginBottom={20}
                        text="Create Account"
                        onPress={signup}
                    />
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
        justifyContent: 'center',
    },
    header1: {
        width: '100%',
        paddingHorizontal: 26,
        fontSize: 40,
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
    textInputFullWidth: {
        width: 340,
        height: 52,
        borderColor: theme.darkGreen,
        borderWidth: 3,
        marginTop: 40,
        alignSelf: 'center'
    },
    textInputSmallWidth: {
        width: 164,
        height: 52,
        borderColor: theme.darkGreen,
        borderWidth: 3,
    },
})

export default SignupScreen;