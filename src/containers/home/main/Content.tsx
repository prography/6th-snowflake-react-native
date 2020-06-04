import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Platform, Text, View } from 'react-native';
import { d, BASE_URL, l } from '~/utils/constant';
import HomeCardNoticePurple from '~/components/home/card/HomeCardNoticePurple';
import HomeCardDefaultContentPurpleButton from '~/components/home/card/HomeCardDefaultContentPurpleButton';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';

const Content = () => {
  const [contentArray, setContentArray] = useState(null);

  const _getWelcomCards = async () => {
    try {
      const response = await fetch(`${BASE_URL}/home/welcome-cards/`);
      const json = await response.json();
      console.log('👻 welcome-cards success', contentArray);
      setContentArray(json.results);
    } catch (error) {
      console.log('👻 welcome-cards error ', error);
    }
  };

  useEffect(() => {
    _getWelcomCards();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {contentArray === null ? (
        <View style={{ marginRight: l.mR }}>
          <TextTitlePurpleRight title={'Loading...'} />
        </View>
      ) : (
        contentArray.map((card) => {
          switch (card.design_type) {
            case 'default':
              return (
                <HomeCardDefaultContentPurpleButton
                  tag={card.tag_txt.split(',')}
                  title={card.title}
                  btnText={card.button_txt}
                  content={card.description}
                  link={card.button_src}
                />
              );
            case 'notice':
              return (
                <HomeCardNoticePurple
                  tag={card.tag_txt.split(',')}
                  title={card.title}
                  content={card.description}
                />
              );
            default:
              return <Text>😭무언가 잘 못 되었음</Text>;
          }
        })
      )}
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
