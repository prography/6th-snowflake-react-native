import * as React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import {
  State,
  setReviewContent,
  reviewUploadContentPlaceholder,
  setIsFilledReviewUpload3,
} from '~/modules/product/reviewUpload/reviewUploadReducer';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { d, c, l } from '~/utils/constant';
import MarginWide from '~/components/universal/margin/MarginWide';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import MarginMedium from '~/components/universal/margin/MarginMedium';
import { TouchableOpacity } from 'react-native-gesture-handler';

const REVIEW_MINIMUM_LENGTH = 15;
const TitleContainer = styled.View`
  align-items: center;
  width: ${d.width - l.mR * 2}px;
  margin: 0 ${l.mR}px;
  justify-content: space-between;
  flex-direction: row;
`;
const ReviewLengthText = styled.Text`
  font-family: Jost-Medium;
  color: ${c.lightGray};
  text-align: right;
`;
const AnswerContainer = styled.View``;
const AnswerInput = styled.TextInput`
  width: ${d.width - l.mR * 2}px;
  margin-left: ${l.mR}px;
  font-size: ${d.px * 15}px;
  line-height: ${d.px * 25}px;
  color: ${c.black};
`;
const ReviewUploadContent = () => {
  const [reviewLength, setReviewLength] = useState(0);
  const dispatch = useDispatch();
  const _setReviewContent = (reviewContent: State) => {
    dispatch(setReviewContent(reviewContent));
  };
  const _setIsFilledReviewUpload3 = (isFilledReviewUpload3: State) => {
    dispatch(setIsFilledReviewUpload3(isFilledReviewUpload3));
  };
  const _isFilledReviewUpload3 = useSelector(
    (state: State) => state.reviewUploadReducer.isFilledReviewUpload3
  );
  const _reviewContent = useSelector(
    (state: State) => state.reviewUploadReducer.reviewContent
  );

  return (
    <>
      <TitleContainer>
        <TextMiddleTitleDark title={'사용 후기를 남겨주세요.'} />
        <ReviewLengthText>{reviewLength}</ReviewLengthText>
      </TitleContainer>

      <MarginMedium />
      <AnswerContainer>
        <AnswerInput
          placeholderTextColor={c.lightGray}
          placeholder={reviewUploadContentPlaceholder}
          onChangeText={(text) => [
            _setReviewContent(text),
            setReviewLength(text.length),
            _setIsFilledReviewUpload3(
              reviewLength < REVIEW_MINIMUM_LENGTH ? false : true
            ),
          ]}
          multiline={true}
          clearTextOnFocus={_reviewContent ? false : true}
        >
          {_reviewContent}
        </AnswerInput>
      </AnswerContainer>
    </>
  );
};

export default ReviewUploadContent;
