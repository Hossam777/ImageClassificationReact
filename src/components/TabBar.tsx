import React, { ReactElement, useContext } from 'react';
import { Image, ImageProps, ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Theme from 'models/Theme';
import ThemeContext from 'theme/ThemeContext';

export interface Props {
    title?: string;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    titleStyle?: StyleProp<ViewStyle>;
}

const Header = ({ title, leftIcon, rightIcon, titleStyle, ...rest }: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);
    return (
        <View style={[styles.container]} {...rest}>
            {!!leftIcon ? 
            <Image source={leftIcon} style={styles.icon} />: <View style={styles.icon}/>}
            <Text style={[styles.text, titleStyle]}>
                {title}
            </Text>
            {!!rightIcon ? 
            <Image source={rightIcon} style={styles.icon} />: <View style={styles.icon}/>}
        </View>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
        backgroundColor: theme.darkGreen,
    },
    text: {
        color: theme.white,
        fontSize: 20,
    },
    icon: {
        marginHorizontal: 16,
        width: 16,
        height: 16,
    },
});

export default Header;
