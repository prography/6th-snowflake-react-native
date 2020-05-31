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

const ProductReviewBar2 = ({ children, navigation }: Props) => {
  const _score = useSelector((state: State) => state.reviewUploadReducer.score);
  const _myGender = useSelector(
    (state: State) => state.reviewUploadReducer.myGender
  );
  const _partnerGender = useSelector(
    (state: State) => state.reviewUploadReducer.partnerGender
  );
  return (
    <Screen>
      {children}
      <Container
        activeOpacity={1}
        style={{
          backgroundColor:
            _score && _myGender && _partnerGender ? c.purple : c.lightGray,
        }}
        onPress={() =>
          _score &&
          _myGender &&
          _partnerGender &&
          navigation.navigate('ProductStack', { screen: 'ReviewUpload3' })
        }
      >
        <TextBottomBtn btnName={'다음'} />
      </Container>
    </Screen>
  );
};

export default withNavigation(ProductReviewBar2);
