import * as React from 'react';
import styled from 'styled-components/native';
import { d, c } from '~/utils/constant';

const Container = styled.View`
  height: ${d.width * 0.12}px;
  width: ${d.width}px;
  flex-direction: row;
  align-items: center;
  margin-top: ${d.width * 0.05}px;
`;

const ReviewCntContainer = styled.View`
  width: ${d.width * 0.38}px;
  justify-content: center;
  align-items: center;
`;

const ReviewCntText = styled.Text`
  color: ${c.darkGray};
  font-size: ${d.px * 20}px;
  font-weight: 800;
`;

const FirstFilterContainer = styled.TouchableOpacity`
  height: ${d.width * 0.08}px;
  width: ${d.width * 0.22}px;
  border-color: ${c.darkGray};
  border-width: ${d.px}px;
  border-radius: ${d.px * 20}px;
  margin-right: ${d.width * 0.015}px;
  justify-content: center;
  align-items: center;
`;

const SecondFilterContainer = styled.TouchableOpacity`
  height: ${d.width * 0.08}px;
  width: ${d.width * 0.18}px;
  border-color: ${c.darkGray};
  border-width: ${d.px}px;
  border-radius: ${d.px * 20}px;
  margin-right: ${d.width * 0.015}px;
  justify-content: center;
  align-items: center;
`;

const ThirdFilterContainer = styled.TouchableOpacity`
  height: ${d.width * 0.08}px;
  width: ${d.width * 0.13}px;
  border-color: ${c.darkGray};
  border-width: ${d.px}px;
  border-radius: ${d.px * 20}px;
  justify-content: center;
  align-items: center;
`;

const FilterText = styled.Text`
  color: ${c.darkGray};
`;

const ReviewFilterContainer = (props) => {
  return (
    <Container>
      <ReviewCntContainer>
        <ReviewCntText>리뷰 {props.reviewCnt}</ReviewCntText>
      </ReviewCntContainer>
      <FirstFilterContainer
        title={'정렬기준'}
        onPress={() => alert('최근 등록순')}
      >
        <FilterText>{props.filterStandard.first}</FilterText>
      </FirstFilterContainer>
      <SecondFilterContainer
        title={'정렬기준'}
        onPress={() => alert('모든 나이')}
      >
        <FilterText>{props.filterStandard.second}</FilterText>
      </SecondFilterContainer>
      <ThirdFilterContainer title={'정렬기준'} onPress={() => alert('남녀')}>
        <FilterText>{props.filterStandard.third}</FilterText>
      </ThirdFilterContainer>
    </Container>
  );
};

export default ReviewFilterContainer;
