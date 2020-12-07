import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { l } from '~/utils/constant';
import HomeCardNoticePurple from '~/components/home/card/HomeCardNoticePurple';
import HomeCardDefaultContentPurpleButton from '~/components/home/card/HomeCardDefaultContentPurpleButton';
import TextTitlePurpleRight from '~/components/universal/text/TextTitlePurpleRight';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';
import { WelcomeCardContent, ResultsRes } from '~/api/interface';

const Content = () => {
  const [contentArray, setContentArray] = useState<WelcomeCardContent[]>(null);

  const _getWelcomCards = async () => {
    try {
      const { status, response } = await fetchAPI('home/welcome-cards/');
      if (status === 200) {
        const json: ResultsRes<WelcomeCardContent> = await response.json();
        llog('👻 welcome-cards success', json);
        setContentArray(json.results);
      }
    } catch (error) {
      llog('👻 welcome-cards error ', error);
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
          contentArray.map((card: WelcomeCardContent, index: number) => {
            switch (card.design_type) {
              case 1:
                return (
                  <HomeCardDefaultContentPurpleButton
                    key={index}
                    tag={card.tag_txt.split(',')}
                    title={card.title}
                    btnText={card.button_txt}
                    content={card.description}
                    link={'ProductStack'}
                  />
                );
              //임시로 productStack 고쳐야함
              case 2:
                return (
                  <HomeCardNoticePurple
                    key={index}
                    tag={card.tag_txt.split(',')}
                    title={card.title}
                    content={card.description}
                  />
                );
              default:
                return <Text key={index}>😭무언가 잘 못 되었음</Text>;
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
