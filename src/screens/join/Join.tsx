import * as React from 'react';
import { View, Text } from 'react-native';
import NavBar from '~/screens/NavBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
const Join = () => {
  return (
    <NavBar>
      <TopBarLeftIcon/>
        <Text>Join</Text>
    </NavBar>
  );
};

export default Join;
