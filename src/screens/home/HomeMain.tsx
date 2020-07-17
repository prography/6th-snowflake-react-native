import * as React from 'react';
import Content from '../../containers/home/main/Content';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';
import NavBar from '~/screens/NavBar';
import MarginBottom from '~/components/universal/margin/MarginBottom';
import analytics from "@react-native-firebase/analytics";

const HomeMain = () => {
  React.useEffect(() => {
    analytics().setCurrentScreen("HomeMain");
  }, []);

  return (
    <NavBar selectedStack={'HomeStack'}>
      <TopBarLeftIcon />
      {/* <MenuBar/> */}
      <Content />
      <MarginBottom />
    </NavBar>
  );
};

export default HomeMain;
