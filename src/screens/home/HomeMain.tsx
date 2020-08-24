import * as React from 'react';
import { Text, Button } from 'react-native';
import analytics from "@react-native-firebase/analytics";
import { useSelector, useDispatch } from 'react-redux';

import Content from '../../containers/home/main/Content';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import NavBar from '~/screens/NavBar';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import { increase } from '~/modules/test/counter';

const HomeMain = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    setTimeout(() => {
      dispatch(increase())
    }, 1000)
  }

  React.useEffect(() => {
    analytics().setCurrentScreen("HomeMain");
  }, []);

  return (
    <NavBar selectedStack={'HomeStack'}>
      <Text>counter: {counter}</Text>
      <Button title="+ 1" onPress={add} />
      <TopBarLeftIcon />
      {/* <MenuBar/> */}
      <Content />
      <MarginBottom />
    </NavBar>
  );
};

export default HomeMain;
