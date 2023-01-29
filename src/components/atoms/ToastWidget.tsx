import React from "react";

import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TMessageTypes } from "../../utils/types";

const Wrapper = styled.View`
  width: 100%;
`;
const Container = styled.View<{ bg: string }>`
  padding-horizontal: ${wp(4.167)}px;
  padding-vertical: ${hp(2)}px;
  margin-horizontal: ${wp(4.44)}px;
  background-color: ${(props) => props.bg};
  /* width: 100%; */
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Message = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #fafafa;
`;

const ToastMessage = ({
  message,
  messageType,
}: {
  message: string;
  messageType: TMessageTypes;
}) => {
  const backgroundColor =
    messageType === "error"
      ? "#EE2E48"
      : messageType === "success"
      ? "#000 "
      : "transparent";

  return (
    <Wrapper>
      <Container bg={backgroundColor}>
        <Message>{message}</Message>
      </Container>
    </Wrapper>
  );
};

export const toastConfig = {
  toastWidget: ({ props }: { props: any }) => (
    <ToastMessage message={props.message} messageType={props.messageType} />
  ),
};

export default ToastMessage;
