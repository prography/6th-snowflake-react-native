import * as React from 'react';

import { ScrollView, Dimensions, Platform, Text } from 'react-native';
import { d, color } from '../../../utils/constant';
import HomeCardDefaultPurpleButton from '~/components/home/card/HomeCardDefaultPurpleButton';
import HomeCardNoticePurple from '~/components/home/card/HomeCardNoticePurple';
import HomeCardDefaultContentPurpleButton from '~/components/home/card/HomeCardDefaultContentPurpleButton';

const CARD_WIDTH = d.width - d.px * 50;
const CARD_HEIGHT = d.px * 203;
const SPACING_FOR_CARD_INSET = d.height * 0.1 - 10;

const Content = () => {
  const contentList = [
    {
      style: 'notice',
      id: 1,
      tag: [{ tag: 'Closed-beta' }, { tag: '많은_피드백_부탁드려요' }],
      title: 'Welcome, PROGRAPHY!',
      content: '건강한 사랑과 개방된 정보 공유,\n눈송이입니다.',
      btnText: 'null',
      link: 'null',
    },
    {
      style: 'default',
      id: 2,
      tag: [{ tag: '제품' }, { tag: '랭킹' }],
      title: '여태까지 아무거나 써왔다면',
      content:
        '소중한 내 몸에 닿는 제품, 알아보는 것 조차 왠지 부끄러웠다면, 눈송이의 제품 랭킹을 확인해 보세요. 블라인드 기능을 통해 어느 곳에서나 당당하게 볼 수 있어요.',
      btnText: '제품 랭킹 보러 가기',
      link: 'ProductStack',
      //   'ProductStack', { screen: 'Ranking' } 가 들어가야 하는데 어떻게 넘겨주지
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      pagingEnabled
      decelerationRate={0}
      snapToInterval={CARD_HEIGHT}
      snapToAlignment='start'
      contentInset={{
        // iOS ONLY
        top: 0,
        left: 0,
        bottom: SPACING_FOR_CARD_INSET,
        right: 0,
      }}
      contentContainerStyle={{
        paddingVertical: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
      }}
    >
      {contentList.map((card) => {
        switch (card.style) {
          case 'default':
            return (
              <HomeCardDefaultContentPurpleButton
                tag={card.tag}
                title={card.title}
                btnText={card.btnText}
                content={card.content}
                link={card.link}
              />
            );
          case 'notice':
            return (
              <HomeCardNoticePurple
                tag={card.tag}
                title={card.title}
                content={card.content}
              />
            );
          default:
            return <Text>안디야</Text>;
        }
      })}
    </ScrollView>
  );
};

export default Content;

// return (
//   <HomeCardDefaultPurpleButton
//     tag={content.tag}
//     title={content.title}
//     btnText={content.btnText}
//     link={content.link}
//   />)
