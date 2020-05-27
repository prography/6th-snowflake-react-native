import * as React from 'react';
import { ScrollView, Dimensions, Platform } from 'react-native';
import { d, color } from '../../../utils/constant';
import HomeCard from '~/components/universal/card/HomeCard';



const CARD_WIDTH = d.px * 231;
const CARD_HEIGHT = d.px * 203;
const SPACING_FOR_CARD_INSET = d.height * 0.1 - 10;


const Content = () => {
    const contentList = [
        {id: 1, tag1: '#제품', tag2: '#랭킹', title: '지난주의 TOP3 제품,\n함께 확인해볼까요?', btnText: '총점 랭킹 ', link: 'Ranking'},
        {id: 2, tag1: '#실험실', tag2: '#날씨', title: '새로운 연구주제가\n업데이트되었습니다!', btnText: '나도 참여하기 ', link: 'LabStack'},
        {id: 3, tag1: '#상담소', tag2: '#좋아요', title: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ', link: 'ClinicStack'},
        {id: 4, tag1: '#상담소', tag2: '#댓글', title: '상담내용,\n혼자 확인해볼까요?', btnText: '상담 보기 ', link: 'ClinicStack'},
        {id: 5, tag1: '#상담소', tag2: '#댓글', title: '상담내용,\n확인해보실까요?', btnText: '상담 보기 ', link: 'ClinicStack'},
        {id: 6, tag1: '#상담소', tag2: '#좋아요', title: '상담내용,\n확인해볼 수 있을까요?', btnText: '상담 보기 ', link: 'ClinicStack'},
        {id: 7, tag1: '#상담소', tag2: '#좋아좋아', title: '상담내용,\n확인해보실래요?', btnText: '상담 보기 ', link: 'ClinicStack'},
    ]


    return(
        <ScrollView 
            showsVerticalScrollIndicator={false}
            pagingEnabled
            decelerationRate={0}
            snapToInterval={CARD_HEIGHT}
            snapToAlignment='start'
            contentInset={{ // iOS ONLY
                top: 0,
                left: 0,
                bottom: SPACING_FOR_CARD_INSET,
                right: 0
              }}
              contentContainerStyle={{
                paddingVertical: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
              }}
            >
            {contentList.map((content) => {
                return <HomeCard content={content}/>;
            })}
        </ScrollView>
    );
};

export default Content;