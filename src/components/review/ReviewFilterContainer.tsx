import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '../../utils/constant';

const Container = styled.View`
    height: ${device.width * 0.12}px
    width: ${device.width}px
    flex-direction: row;
    align-items: center;
    margin-top: ${device.width * 0.05}px
`;

const ReviewCntContainer = styled.View`
    width: ${device.width * 0.38}px;
    justify-content: center;
    align-items: center;
`;

const ReviewCntText = styled.Text`
    color: ${color.grayDark};
    font-size: ${device.px * 20}px;
    font-weight: 800;
`;

const FirstFilterContainer = styled.TouchableOpacity`
    height: ${device.width * 0.08}px;
    width: ${device.width * 0.22}px;
    border-color: ${color.grayLight};
    border-width: ${device.px}px;
    border-radius: ${device.px * 20}px;
    margin-right: ${device.width * 0.015}px;
    justify-content: center;
    align-items: center;
`;

const SecondFilterContainer = styled.TouchableOpacity`
    height: ${device.width * 0.08}px;
    width: ${device.width * 0.18}px;
    border-color: ${color.grayLight};
    border-width: ${device.px}px;
    border-radius: ${device.px * 20}px;
    margin-right: ${device.width * 0.015}px;
    justify-content: center;
    align-items: center;
`;

const ThirdFilterContainer = styled.TouchableOpacity`
    height: ${device.width * 0.08}px;
    width: ${device.width * 0.13}px;
    border-color: ${color.grayLight};
    border-width: ${device.px}px;
    border-radius: ${device.px * 20}px;
    justify-content: center;
    align-items: center;
`;

const FilterText = styled.Text`
    color: ${color.grayLight};
`;

const ReviewFilterContainer = (props) => {
    return (
        <Container>
            <ReviewCntContainer>
                <ReviewCntText>리뷰  {props.reviewCnt}</ReviewCntText>
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
            <ThirdFilterContainer
                title={'정렬기준'}
                onPress={() => alert('남녀')}
            >
                    <FilterText>{props.filterStandard.third}</FilterText>
            </ThirdFilterContainer>
        </Container>
    );
};

export default ReviewFilterContainer;