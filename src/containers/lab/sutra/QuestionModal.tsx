import * as React from "react";
import styled from 'styled-components';
import { useEffect } from "react";
import { Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

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
  width: 200px;
  height: 200px;
  background-color: skyblue;
  align-self: center;
`;

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
        <Button title="보라두리 선택" onPress={() => onSelect(Position.PURPLE)} />
        <Button title="하늘이 선택" onPress={() => onSelect(Position.SKY)} />
        <Button title="선택 안 하기" onPress={() => onSelect(Position.NONE)} />
      </Container>
    </BaseModal>
  );
};
