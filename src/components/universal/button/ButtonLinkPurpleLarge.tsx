import * as React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { useLinkTo } from '@react-navigation/native';

import { d, c } from '~/utils/constant';
import TextBottomBtn from '../text/TextBottomBtn';
import { Img } from '~/img';
import { eventUtil } from '~/utils/firebase/event';

interface Props {
  buttonText: string;
  link: string;
  navigation: any;
}

const Container = styled.TouchableOpacity`
  background-color: ${c.purple};
  align-self: flex-end;
  padding-left: ${d.px * 10}px;
  padding-right: ${d.px * 10}px;
  height: ${d.px * 40}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-family: 'Jost-Book';
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 40}px;
  text-align: left;
  color: white;
`;

const TriangleArrow = styled.Image`
  height: ${d.px * 12}px;
  width: ${d.px * 6}px;
  margin-left: ${d.px * 6}px;
`;

const ButtonLinkPurpleLarge = ({ buttonText, link, navigation }: Props) => {
  const linkTo = useLinkTo();
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        eventUtil.logEvent(eventUtil.press_btn_in_home, { link });
        navigation.navigate(link);

        // 딥링크 테스트용 코드
        // linkTo('/ranking?category=&order=')
        // linkTo('/ranking?category=DELAY&order=num_of_reviews')
        // linkTo('/productInfo/42')
      }}
    >
      <TextBottomBtn btnName={buttonText} />
      <TriangleArrow
        resizeMode="contain"
        source={Img.triangleArrow}
      />
    </Container>
  );
};

export default withNavigation(ButtonLinkPurpleLarge);
