import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { d, c, circleColor3 } from '~/utils/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OneLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ColorCircles3 = () => {
  const dispatch = useDispatch();
  const womanColor = useSelector(
    (state: State) => state.genderColorReducer.womanColor
  );
  const manColor = useSelector(
    (state: State) => state.genderColorReducer.manColor
  );

  const setWomanColor = (cColor) => {
    dispatch({ type: 'SET_WOMAN_COLOR', womanColor: cColor });
  };
  const setManColor = (cColor) => {
    dispatch({ type: 'SET_MAN_COLOR', manColor: cColor });
  };

  const setColor = (cColor) => {
    womanColor === null
      ? setWomanColor(cColor)
      : manColor === null
      ? womanColor === cColor
        ? alert('다른 색을 골라주세요')
        : setManColor(cColor)
      : [setManColor(null), setWomanColor(cColor)];
  };

  return (
    <>
      {/* 고쳐야함... for문 안 먹어 ㅠㅠ...... */}
      <OneLine>
        {circleColor3.map((circle) => {
          return (
            <TouchableOpacity
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

export default ColorCircles3;
