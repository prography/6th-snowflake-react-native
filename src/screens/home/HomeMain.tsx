import * as React from 'react';
import { View, Text } from 'react-native';

import NavBar from '~/screens/NavBar';

const HomeMain = () => {
  return (
    <NavBar>
      <View>
        <Text>홈 화면</Text>
      </View>
    </NavBar>
  );
};

export default HomeMain;
