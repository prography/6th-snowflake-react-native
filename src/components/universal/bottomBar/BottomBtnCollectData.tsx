import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c, l } from '~/utils/constant';
import TextBottomBtn from '~/components/universal/text/TextBottomBtn';

interface Props {
  children: React.ReactNode;
  navigation: StackNavigationProp<RootTabParamList>;
  isFilled: boolean;
  stack: string;
  screen: string;
  btnText: string;
  btnTextBeforeFilled?: string;
  onPressFunction?: any;
  params?: any
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

const BottomBtnCollectData = ({
  children,
  navigation,
  isFilled,
  stack,
  screen,
  btnText,
  btnTextBeforeFilled,
  onPressFunction,
  params,
}: Props) => {
  return (
    <Screen>
      {children}
      <Container
        activeOpacity={1}
        style={{
          backgroundColor: isFilled ? c.purple : c.lightGray,
        }}
        onPress={() =>
          onPressFunction
            ? onPressFunction()
            : isFilled
              ? stack && screen
                ? navigation.navigate(screen, params)
                : null
              : null
        }
      >
        <TextBottomBtn
          btnName={
            btnTextBeforeFilled
              ? isFilled
                ? btnText
                : btnTextBeforeFilled
              : btnText
          }
        />
      </Container>
    </Screen>
  );
};

export default withNavigation(BottomBtnCollectData);
