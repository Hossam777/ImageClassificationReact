import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

    return (
        <View>
            
        </View>
    );
};

const getStyles = (theme: Theme) => StyleSheet.create({

})

export default MainScreen;