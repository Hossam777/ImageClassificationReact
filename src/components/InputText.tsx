import React, { useContext, useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle, View } from 'react-native';
import Theme from 'models/Theme';
import ThemeContext from '../theme/ThemeContext';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

interface Props {
    hint?: string;
    textInputStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    hintColor?: string;
    textAlign?: 'center' | 'right' | 'left' | undefined,
    validator?: (text: string) => string;
    forceValidation?: string;
    value?: string;
    confirmPasswordValidator?: (text: string, password: string) => string;
    password?: string;
}
const InputText = ({ hint, textInputStyle, containerStyle, textAlign, hintColor
    , value, forceValidation, validator, password, confirmPasswordValidator, ...rest }: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    const [errorMsg, onChangeErrorMsg] = useState('');
    useEffect(() => {
        if(!!value && !!password && !!confirmPasswordValidator){
            onChangeErrorMsg(confirmPasswordValidator(value, password))
            return
        }
        if (!!value && !!validator) {
            onChangeErrorMsg(validator(value))
        }
    }, [value]);
    useEffect(() => {
        if(value != undefined && !!password && !!confirmPasswordValidator){
            onChangeErrorMsg(confirmPasswordValidator(value, password))
            return
        }
        if (!!forceValidation && value != undefined && !!validator) {
            onChangeErrorMsg(validator(value))
        }
    }, [forceValidation]);
    return (
        <View>
            <TouchableOpacity
                style={[styles.container, containerStyle]}>
                <TextInput
                    placeholder={hint}
                    placeholderTextColor={hintColor}
                    style={[styles.text, textInputStyle]}
                    textAlign={textAlign}
                    {...rest}
                    value={value}
                />
            </TouchableOpacity>
            {
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            }
        </View>
    )
}

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        width: 164,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.white
    },
    text: {
        width: '100%',
        paddingHorizontal: 20,
    },
    errorMsg: {
        color: '#F00',
        fontSize: 10,
    }
})

export default InputText;