import * as React from 'react';
import styled from 'styled-components/native';

import { d, c, l } from '~/utils/constant';

const Container = styled.View`
  ${props => props.theme.marginAndWidth}
  height: ${d.px * 1}px;
  border-width: ${d.px * 0.3}px;
  border-color: ${c.extraLightGray};
`;

const LineGrayMiddle = () => {
  return <Container />;
};
export default LineGrayMiddle;
