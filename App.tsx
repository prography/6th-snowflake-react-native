import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '~/utils/constant';
import { Provider } from 'react-redux';
import store from '~/store';

import RootTabNavigation from '~/navigation/RootTabNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
          <NavigationContainer>
            <RootTabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
