import * as React from 'react';
import styled from 'styled-components/native';
import { d, l, c } from '~/utils/constant';
import TextMiddleTitleDark from '~/components/universal/text/TextMiddleTitleDark';
import TextProductScoreBig from '~/components/universal/text/product/info/TextProductScoreBig';

interface Props {
  title: string;
  score?: string;
  type: string;
  reviewNum?: number;
}

const Container = styled.View`
  width: ${d.width - d.px * 50}px;
  align-items: center;
  flex-direction: row;
`;
const LeftWrapper = styled.View`
  width: ${l.lW}px;
`;
const RightWapper = styled.View`
  width: 100%;
`;

const AlarmText = styled.Text`
  color: ${c.purple};
  font-family: Jost-Medium;
`;
const TextProductMiddleBar = ({ title, score, reviewNum, type }: Props) => {
  return (
    <>
      <Container>
        <LeftWrapper>
          <TextMiddleTitleDark title={title} />
        </LeftWrapper>
        <RightWapper>
          {type === 'score' ? (
            score ? (
              <TextProductScoreBig score={score} />
            ) : (
              <AlarmText>작성된 리뷰가 아직 없어요</AlarmText>
            )
          ) : null}
          {type === 'review' ? (
            reviewNum ? (
              <TextProductScoreBig reviewNum={reviewNum} />
            ) : (
              <TextProductScoreBig reviewNum={'0'} />
            )
          ) : null}
        </RightWapper>
      </Container>
    </>
  );
};

export default TextProductMiddleBar;
