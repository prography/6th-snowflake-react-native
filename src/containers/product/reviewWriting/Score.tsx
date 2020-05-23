import * as React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { device, color } from '~/utils/constant';
import ScoreContainer from '~/components/product/reviewWriting/ScoreContainer';

const Score = () => {
  const score = {
    thinScore: '★★★★★',
    durableScore: '★★★☆☆',
    slushScore: '★★★★☆',
    totalScore: '★★★★☆',
  };

  return <ScoreContainer score={score} />;
};

export default Score;
