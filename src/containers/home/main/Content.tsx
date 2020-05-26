import * as React from 'react';
import ContentBox from '../../../components/home/main/ContentBox';
import { ScrollView, Dimensions, Platform } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;


const Content = () => {
    const contentList = [
        {id: 1, tag1: '#제품', tag2: '#랭킹', desc: '지난주의 탑3 제품,\n함께 확인해볼까요?', btnText: '총점 랭킹 ▶',img_url: '../../img/condom.png'},
        {id: 2, tag1: '#실험실', tag2: '#랭킹', desc: '이것은 실험실실험실 실험실 실험실,\n함께 확인해볼까요?', btnText: '실험실 내용 ▶',img_url: '../../img/condom.png'},
        {id: 3, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'},
        {id: 4, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'},
        {id: 5, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'},
        {id: 6, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'},
        {id: 7, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'},
    ]


    return(
        <ScrollView 
            horizontal
            pagingEnabled
            decelerationRate={0}
            snapToInterval={CARD_WIDTH+10}
            snapToAlignment='center'
            contentInset={{ // iOS ONLY
                top: 0,
                left: SPACING_FOR_CARD_INSET,
                bottom: 0,
                right: SPACING_FOR_CARD_INSET
              }}
              contentContainerStyle={{
                paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
              }}
            >
            {contentList.map((content) => {
                return <ContentBox content={content}/>;
            })}
        </ScrollView>
    );
};

export default Content;