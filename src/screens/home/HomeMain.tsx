import * as React from 'react';
import Content from '../../containers/home/main/Content';
import MenuBar from '../../containers/home/main/MenuBar';
import TopBarLeftIcon from '~/components/universal/topBar/TopBarLeftIcon';


import NavBar from '~/screens/NavBar';

const HomeMain = () => {
  return (
    <NavBar>
      <TopBarLeftIcon/>
      {/* <MenuBar/> */}
      <Content/>
    </NavBar>
  );
};

export default HomeMain;