import * as React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import OneSutraCard from '~/components/lab/sutra/list/OneSutraCard';
import { getTokenItem } from '~/utils/asyncStorage';
import { fetchAPI } from '~/api';
import { llog } from '~/utils/functions';

// 여기에서 데이터 받아와서 map 돌려서 OneSutraCard에 넘겨주면 됩니다!


const SutraCardsList = () => {

  const _getSutraList = async () => {
    try {
      const token = await getTokenItem();
      console.log(token)
      if (!token) { return; }
  
      const { status, response } = await fetchAPI(`labs/sutra/?limit=3&offset=1`,
      {token});
      const json = await response.json();
      llog('SutraList - success!', json);

      if (status === 200) {
        // _setTopFiveList(json.results);
      }
    } catch (error) {
      llog('StruaList - error', error);
    }
  };
  
  useEffect(() => {
    console.log('데이터불러와')
    _getSutraList();
  }, []);

  return (
    <>
      <OneSutraCard />
    </>
  );
};

export default SutraCardsList;
