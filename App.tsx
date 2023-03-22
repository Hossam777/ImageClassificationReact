import React from 'react';
import {
  Platform,
  UIManager,
} from 'react-native';
import ThemeContext from './src/theme/ThemeContext';
import defaultTheme from './src/theme/theme';
import MainNavigationStack from './src/navigation/MainNavigationStack';

const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return(
    <ThemeContext.Provider value={defaultTheme}>
      <MainNavigationStack />
    </ThemeContext.Provider>
  )
};

export default App;
