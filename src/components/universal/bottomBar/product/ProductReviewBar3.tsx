import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { withNavigation } from '@react-navigation/compat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '~/navigation/RootTabNavigation';
import { d, c, l } from '~/utils/constant';
import TextBottomBtn from '~/components/universal/text/TextBottomBtn';
import {
  State,
  setReviewContent,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
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

const ProductReviewBar3 = ({ children, navigation }: Props) => {
  const dispatch = useDispatch();
  const _reviewContent = useSelector(
    (state: State) => state.reviewUploadReducer.reviewContent
  );
  const _setReviewContent = (reviewContent) => {
    dispatch(setReviewContent(reviewContent));
  };
  return (
    <Screen>
      {children}
      <Container
        activeOpacity={1}
        style={{
          backgroundColor: _reviewContent ? c.purple : c.lightGray,
        }}
        onPress={() =>
          _reviewContent &&
          navigation.navigate('ProductStack', { screen: 'ProductInfo' })
        }
      >
        <TextBottomBtn btnName={'리뷰 저장'} />
      </Container>
    </Screen>
  );
};

export default withNavigation(ProductReviewBar3);
