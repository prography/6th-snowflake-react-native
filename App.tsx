import * as React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinkingOptions } from '@react-navigation/native/lib/typescript/src/types';

import { theme } from '~/utils/constant';
import { Provider } from 'react-redux';
import store from '~/store';
import NavController from '~/screens/NavController';
import { CommonProvider } from '~/context/CommonContext';

// 문서: https://reactnavigation.org/docs/configuring-links
const config = {
  screens: {
    HomeStack: {
      initialRouteName: 'HomeMain',
      screens: {
        HomeMain: {
          // path: '/homemain', // 첨부터 홈메인 들어오니까 필요 없긴 함
        }
      }
    },
    ProductStack: {
      initialRouteName: 'ProductMain',
      screens: {
        ProductInfo: {
          path: 'productInfo/:productId',
          parse: {
            productId: Number,
          },
        },
        Ranking: 'ranking/:category?/:order?', // deep link로 이렇게 세팅해놓은 스크린은 딥링크로 한 번 들어오면 이 param이 계속 설정되어 있어서 딥링크로 들어가지 않고, 그 스크린에 param이 항상 필요 없다면 꼭 params: undefined로 해줘야 함.
      }
    },
    JoinStack: {
      screens: {
        Login: {
          path: 'login',
        }
      }
    },
    // NotFound: '*',
  }
}
const linking: LinkingOptions = {
  prefixes: ['snowflake-safelove://'],
  config,
};

// settingIsLoggedin(in NavController)은 store가 있어야 하는 작업이라 <Provider> 하위, <RootTabNavigation> 보다는 위에 있어야 하므로 NavController를 만들었음.
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
          <CommonProvider>
            <NavigationContainer
              // The prefixes option is needed to match the incoming deep links and strip the prefix before React Navigation parses them. It's not needed for web integration.
              // The fallback prop controls what's displayed when React Navigation is trying to resolve the initial deep link URL.
              linking={linking}
              fallback={<Text>Loading...</Text>}>
              <NavController />
            </NavigationContainer>
          </CommonProvider>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
