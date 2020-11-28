import * as React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';

import { d, l } from '~/utils/constant';
import { Img } from '~/img';
import SearchGlass from '~/img/svgIcons/SearchGlass';
import SnowflakeLogo from '~/img/svgIcons/SnowflakeLogo';

const Container = styled.View`
  height: ${d.px * l.tB}px;
  width: ${d.width - d.px * l.tB}px;
  margin-left: ${props => props.theme.paddingWidth.wideLeftRight.paddingLeft};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const SnowFlake = styled.Image`
  height: ${d.px * 42}px;
  width: ${d.px * 42}px;
`;
const SearchButton = styled.TouchableOpacity`
  height: ${l.tB / 2}px;
  width: ${d.px * 50}px;

  align-items: flex-start;
  justify-content: center;
`;
const SearchIcon = styled.Image`
  height: ${d.px * 25}px;
  width: ${d.px * 26}px;
`;
interface Props {
  navigation: any;
}
const TopBarLeftIconSearchBar = ({ navigation }: Props) => {
  return (
    <Container>
      <SnowflakeLogo/>
      <SearchButton
        onPress={() => {
          navigation.navigate('ProductStack', {
            screen: 'SearchProduct',
          });
        }}
      >
        <SearchGlass/>
      </SearchButton>
    </Container>
  );
};

export default withNavigation(TopBarLeftIconSearchBar);
