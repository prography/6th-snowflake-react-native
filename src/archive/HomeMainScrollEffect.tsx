import * as React from 'react';
import { ScrollView, Platform, Text } from 'react-native';
import { d } from '~/utils/constant';
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
      tag: [{ tag: '제품' }, { tag: '반가워요' }],
      title: '아무거나 써왔다면,',
      content:
        '소중한 내 몸에 닿는 제품, 적극적으로 알아보신 적 있으신가요? 기록 남는 것도 싫고, 또 자극적인 사이트가 불편하셨다면 눈송이의 제품 탭을 확인해 보세요. 언제 어디서나 당당하게 볼 수 있는 블라인드 기능도 잊지 마세요.',
      btnText: '제품 보러 가기',
      link: 'ProductStack',
      //   'ProductStack', { screen: 'ProductInfo' } 가 들어가야 하는데 어떻게 넘겨주지
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
