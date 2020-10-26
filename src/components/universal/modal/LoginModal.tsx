import * as React from "react";
import { useState, useEffect } from "react";
import { Alert, View, Text } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { c, d } from "~/utils/constant";
import { withNavigation } from "@react-navigation/compat";
import { RootTabParamList } from "~/navigation/RootTabNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import BaseModal from "./BaseModal";

interface Props {
  message: string;
  toggleModal: () => void;
  modalVisible: boolean;
  navigation: StackNavigationProp<RootTabParamList>;
}

const Container = styled.View`
  background-color: ${c.lightGray};
  justify-content: center;
  align-items: center;
  border-radius: ${d.px * 15}px;
`;

const Message = styled.Text`
  font-size: ${d.px * 15}px;
  font-family: Jost-Bold;
  padding: ${d.px * 5}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;
const MoveSingUpButton = styled.TouchableOpacity`
  background-color: ${c.mint};
  border-radius: ${d.px * 11}px;
  margin: ${d.px * 11}px;
`;

const MoveLoginButton = styled.TouchableOpacity`
  background-color: ${c.mint};
  border-radius: ${d.px * 11}px;
  margin: ${d.px * 11}px;
`;

const CancelButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: ${d.px * 11}px;
  margin: ${d.px * 11}px;
`;

const LoginModal = ({
  message,
  modalVisible,
  toggleModal,
  navigation,
}: Props) => {
  const navigateTo = (screen: string) => {
    toggleModal();
    navigation.navigate("JoinStack", { screen });
  };

  return (
    <BaseModal isVisible={modalVisible}>
      <Container>
        <Message>{"❄️"}</Message>
        <Message>{message}</Message>
        <ButtonContainer>
          <MoveSingUpButton onPress={() => navigateTo("SettimgMain")}>
            <Message>{"회원가입"}</Message>
          </MoveSingUpButton>
          <MoveLoginButton onPress={() => navigateTo("SettimgMain")}>
            <Message>{"로그인"}</Message>
          </MoveLoginButton>
          <CancelButton onPress={toggleModal}>
            <Message>{"취소"}</Message>
          </CancelButton>
        </ButtonContainer>
      </Container>
    </BaseModal>
  );
};

export default withNavigation(LoginModal);
