import * as React from "react";
import styled from 'styled-components/native';
import { useEffect } from "react";
import { Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Img } from '~/img';
import { RootState } from "~/store/modules";
import BaseModal from "~/components/universal/modal/BaseModal";
import { eventUtil } from "~/utils/firebase/event";
import { Position } from "~/api/interface";
import { getUserInfoAC } from "~/store/modules/join/userInfo";
import { fetchAPI } from "~/api";
import { llog, consoleError } from "~/utils/functions";
import { toast } from "~/utils/toast";
import { getTokenItem } from "~/utils/asyncStorage";
import { alertUtil } from "~/utils/alert";

interface Props {
  isVisible: boolean;
  onCancel: () => void;
  navigateToJoinStack: () => void;
}

const Container = styled.View`
  width: ${props=> props.theme.dimensions.width * 0.9}px;
  height:${props=> props.theme.dimensions.px * 400}px;
  background-color:white;
  align-self: center;
  flex-direction: column;
  ${props=> props.theme.paddingWidth.wideLeftRight};
`;
const HeaderWrapper = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`
const HeaderText = styled.Text`
  ${props=> props.theme.fonts.title.semi15}
`
const TopAreaWrapper = styled.View`
  flex-direction: row;
  flex:2
`
const ButtonTouchable = styled.TouchableOpacity`
  flex:1;
  justify-content: center;
  align-items: center;
  ${props=> props.theme.paddingWidth.wideLeftRight};
`
const CharacImg = styled.Image`
  width: ${props=> props.theme.dimensions.px * 70}px;
  height: ${props=> props.theme.dimensions.px *70}px;
  margin-bottom: ${props=> props.theme.dimensions.px *10}px;
`;
const ButtonText = styled.Text`
  ${props=> props.theme.fonts.title.semi14};
  text-decoration: underline;
  color: ${props=> props.theme.themeColor.darkGray}
`
const DescriptionText= styled.Text`
${props=> props.theme.fonts.content.book14};
margin-top: ${props=> props.theme.dimensions.px *10}px;
  color: ${props=> props.theme.themeColor.darkGray};
  
`

export default ({ isVisible, onCancel, navigateToJoinStack }: Props) => {
  // redux
  const dispatch = useDispatch();
  const { data: userInfo } = useSelector((state: RootState) => state.join.userInfo.userInfo);

  const onSelect = async (position: Position) => {
    try {
      const token = await getTokenItem();
      if (!token) {
        alertUtil.needLogin(navigateToJoinStack, '로그인');
        return;
      }

      const { status, response } = await fetchAPI('accounts/', {
        token,
        method: 'PATCH',
        params: { position },
      });
      const json = await response.json();
      llog('🟣 position 선택 결과. 성공 = 201', status, json);

      if (status === 201) {
        dispatch(getUserInfoAC.request({ data: userInfo }));
        onCancel();
      } else {
        toast(`${json?.detail} (${status})`);
      }
    } catch (error) {
      consoleError('position set error', error);
      // 오류나면 모달 닫지 않고 토스트 메세지
      toast('설정 중 오류가 발생했어요. 네트워크를 확인해주세요.');
    }
  };

  useEffect(() => {
    eventUtil.logScreenView(eventUtil.SutraQuestion)
  }, []);

  return (
    <BaseModal isVisible={isVisible} onBackdropPress={onCancel}>
      <Container>
      <HeaderWrapper>
        <HeaderText>자신에게 더 가까운 친구를 선택해주세요!</HeaderText>
      </HeaderWrapper>
        <TopAreaWrapper>
          <ButtonTouchable  onPress={() => onSelect(Position.PURPLE)} activeOpacity={1}>
          <CharacImg  source={  Img.sutra.purpleUnselected }/>
            <ButtonText>오목이</ButtonText>
            <DescriptionText>오목이는 성관계 시 삽입되길 선호해요. 이성애의 관계에서는 대체로 여성에 해당해요.</DescriptionText>
          </ButtonTouchable>
          <ButtonTouchable  onPress={() => onSelect(Position.SKY)} activeOpacity={1}>
          <CharacImg  source={  Img.sutra.skyUnselected }/>
          <ButtonText>볼록이</ButtonText>
          <DescriptionText>볼록이는 성관계 시 삽입하는 성향을 띄어요. 이성애의 관계에서는 대체로 남성에 해당해요.</DescriptionText>
          </ButtonTouchable>
        </TopAreaWrapper>
        <ButtonTouchable  onPress={() => onSelect(Position.NONE)}>
        <ButtonText>아직 모르겠거나 밝히고 싶지 않아요.</ButtonText>

        </ButtonTouchable>
      </Container>
    </BaseModal>
  );
};
