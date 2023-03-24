import React, { useContext } from 'react';
import { StyleSheet, Text} from 'react-native';
import Theme from 'models/Theme';
import ThemeContext from '../theme/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    width?: string|number;
    height?: string|number;
    text?: string;
    onPress?: () => void;
    bold?: boolean;
    textSize?: number;
    textColor?: string;
    borderRadius?: number;
    borderColor?: string;
    backgroundColor?: string;
}

const Button = ({width, height, text, onPress, textColor, textSize, ...rest}: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    return(
        <TouchableOpacity style={[styles.container, {width: width, height: height, ...rest}]} onPress={onPress}>
            <Text style={{color: textColor, fontSize: textSize}}>{text}</Text>
        </TouchableOpacity>
    )
}

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColor
    }
})

export default Button;