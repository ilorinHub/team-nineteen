import { View, Text } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";
import SuccessIcon from "../../../components/atoms/icons/SuccessIcon";
import ButtonEl from "../../molecules/ButtonEl";
import { ButtonText } from "../../../theme/style.component";

const Wrapper = styled.View`
  align-items: center;
  flex-grow: 1;
  padding-bottom: ${hp("3.79%")}px;
`;
const Container = styled.View`
  margin-top: ${hp("4.46%")}px;
  flex-grow: 1;
`;

const SuccessScreen = ({
  setSectionToNull,
}: {
  setSectionToNull: Function;
}) => {
  return (
    <Wrapper>
      <SuccessIcon />
      <Container>
        {/* <TitleDesc title="Transaction PIN Changed Successfully" center /> */}
      </Container>
      <ButtonEl
        onPress={() => {
          setSectionToNull();
        }}
        showArrow
      >
        <ButtonText>Proceed</ButtonText>
      </ButtonEl>
    </Wrapper>
  );
};

export default SuccessScreen;
