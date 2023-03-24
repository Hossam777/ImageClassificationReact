import React, { useContext } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import Theme from 'models/Theme';
import ThemeContext from '../theme/ThemeContext';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

interface Props {
    width?: string|number;
    height?: string|number;
    hint?: string;
    textInputStyle?: StyleProp<ViewStyle>;
    textSize?: number;
    textColor?: string;
    hintColor?: string;
    borderRadius?: number;
    textAlign?: 'center' | 'right' | 'left' | undefined,
    borderColor?: string;
    backgroundColor?: string;
}
const InputText = ({hint, textInputStyle, textAlign, hintColor, ...rest}: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    return(
        <TouchableOpacity 
        style={[styles.container, {...rest}] }>
            <TextInput
                placeholder={hint}
                placeholderTextColor={hintColor}
                style={[styles.text, textInputStyle]}
                textAlign={textAlign}
            />
        </TouchableOpacity>
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
})

export default InputText;