import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { d, c, circleColor1 } from '~/utils/constant';
import { setManColor, setWomanColor } from '~/store/modules/join/genderColor';
import { RootState } from '~/store/modules';

const OneLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ColorCircles1 = () => {
  const dispatch = useDispatch();
  const womanColor = useSelector(
    (state: RootState) => state.join.genderColor.womanColor,
  );
  const manColor = useSelector(
    (state: RootState) => state.join.genderColor.manColor,
  );

  const setColor = (cColor) => {
    womanColor === null
      ? dispatch(setWomanColor(cColor))
      : manColor === null
        ? womanColor === cColor
          ? alert('다른 색을 골라주세요')
          : dispatch(setManColor(cColor))
        : [dispatch(setManColor(null)), dispatch(setWomanColor(cColor))];
  };

  return (
    <>
      {/* 고쳐야함... for문 안 먹어 ㅠㅠ...... */}
      <OneLine>
        {circleColor1.map((circle, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setColor(circle.cColor);
                console.log('바뀐 womanColor:', womanColor, 'man', manColor);
              }}
              style={{
                width: d.height / 20,
                height: d.height / 20,
                borderRadius: 1000,
                backgroundColor: circle.cColor,
              }}
            />
          );
        })}
      </OneLine>
    </>
  );
};

export default ColorCircles1;
