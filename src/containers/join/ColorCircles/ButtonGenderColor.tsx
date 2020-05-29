import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c, l } from '~/utils/constant';
import TextBottomBtn from '~/components/universal/text/TextBottomBtn';

interface Props {
  children: React.ReactNode;
  navigation: StackNavigationProp<RootTabParamList>;
}

const Screen = styled.View`
  flex: 1;
  background-color: white;
`;

const Container = styled.TouchableOpacity`
  height: ${l.bottomBar}px;
  width: ${d.width}px;
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonGenderColor = ({ children, navigation }: Props) => {
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );
  return (
    <Screen>
      {children}
      <Container
        activeOpacity={1}
        style={{
          backgroundColor: womanColor && manColor ? c.purple : c.lightGray,
        }}
        onPress={() =>
          womanColor && manColor && navigation.navigate('HomeStack')
        }
      >
        <TextBottomBtn btnName={'눈송이 시작하기'} />
      </Container>
    </Screen>
  );
};

export default withNavigation(ButtonGenderColor);
