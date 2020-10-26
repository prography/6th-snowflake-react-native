import * as React from "react";
import Modal, { ModalProps } from 'react-native-modal';
// Modal은 다 이곳을 거쳐간다
export default (props: Partial<ModalProps>) => {
  return (
    <Modal
      animationIn={props.animationIn || 'fadeIn'}
      animationOut={props.animationOut || 'fadeOut'}
      onBackButtonPress={props.onBackdropPress}
      onBackdropPress={props.onBackdropPress}
      useNativeDriver={true}
      {...props}>
      {props.children}
    </Modal>
  );
};