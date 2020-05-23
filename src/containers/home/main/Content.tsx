import React from 'react'
import ContentBox from '../../../components/home/main/ContentBox';
import { ScrollView } from 'react-native';

    

const Content = () => {
    const contentList = [
        {id: 1, tag1: '#제품', tag2: '#랭킹', desc: '지난주의 탑3 제품,\n함께 확인해볼까요?', btnText: '총점 랭킹 ▶',img_url: '../../img/condom.png'},
        {id: 2, tag1: '#실험실', tag2: '#랭킹', desc: '이것은 실험실실험실 실험실 실험실,\n함께 확인해볼까요?', btnText: '실험실 내용 ▶',img_url: '../../img/condom.png'},
        {id: 3, tag1: '#상담소', tag2: '#랭킹', desc: '상담내용,\n함께 확인해볼까요?', btnText: '상담 보기 ▶',img_url: '../../img/condom.png'}
    ]
    return(
        <ScrollView horizontal>
            {contentList.map((content) => {
                return <ContentBox content={content}/>;
            })}
        </ScrollView>
    );
};

export default Content;