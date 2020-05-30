import * as React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { d, color } from '~/utils/constant';
import ScoreContainer from '~/archive/reviewWriting/ScoreContainer';

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
