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

const ProductReviewBar1 = ({ children, navigation }: Props) => {
  const _thicknessScore = useSelector(
    (state: State) => state.reviewUploadReducer.thicknessScore
  );
  const _durabilityScore = useSelector(
    (state: State) => state.reviewUploadReducer.durabilityScore
  );
  const _oilyScore = useSelector(
    (state: State) => state.reviewUploadReducer.oilyScore
  );
  return (
    <Screen>
      {children}
      <Container
        activeOpacity={1}
        style={{
          backgroundColor:
            _thicknessScore && _durabilityScore && _oilyScore
              ? c.purple
              : c.lightGray,
        }}
        onPress={() =>
          _thicknessScore &&
          _durabilityScore &&
          _oilyScore &&
          navigation.navigate('ReviewUpload2')
        }
      >
        <TextBottomBtn btnName={'다음'} />
      </Container>
    </Screen>
  );
};

export default withNavigation(ProductReviewBar1);
