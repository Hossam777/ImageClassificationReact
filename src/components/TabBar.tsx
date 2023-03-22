import React, { ReactElement, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Theme from 'models/Theme';
import ThemeContext from '../theme/ThemeContext';

export interface Props {
    title: string;
    leftIcon: ReactElement;
}

const Header = ({ title, leftIcon }: Props) => {
    const theme = useContext(ThemeContext);
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>

        </View>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 68,
        backgroundColor: theme.darkGreen,
        flex: -1,
    }
});

export default Header;
