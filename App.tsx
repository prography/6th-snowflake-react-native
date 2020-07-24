import * as React from 'react'
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '~/utils/constant';
import { Provider } from 'react-redux';
import store from '~/store';
import NavController from '~/screens/NavController';
import {CommonProvider} from '~/context/CommonContext';

// settingIsLoggedin(in NavController)은 store가 있어야 하는 작업이라 <Provider> 하위, <RootTabNavigation> 보다는 위에 있어야 하므로 NavController를 만들었음.
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
          <CommonProvider>
            <NavigationContainer>
              <NavController />
            </NavigationContainer>
          </CommonProvider>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
