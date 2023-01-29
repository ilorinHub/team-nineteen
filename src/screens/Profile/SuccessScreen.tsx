import { View, Text, Pressable } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";
import { ISuccessProps } from ".";
import ModalEl from "../../components/molecules/ModalEl";
import CancelIcon from "../../components/atoms/icons/CancelIcon";
import ButtonEl from "../../components/molecules/ButtonEl";
import { ButtonText } from "../../theme/style.component";
import SuccessIcon from "../../components/atoms/icons/SuccessIcon";
import { profileSuccessData } from "../../data";

const Wrapper = styled.View`
  padding-top: ${hp("8.25%")}px;
  padding-bottom: ${hp("3.79%")}px;
  padding-horizontal: ${wp("5.07%")}px;
  flex-grow: 1;
`;
const Container = styled.View`
  margin-top: ${hp("4.46%")}px;
  align-items: center;
`;

const Header = styled.View`
  margin-bottom: ${hp("6.7%")}px;
`;
const MainContent = styled.View`
  align-items: center;
`;
const ButtonWrapper = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`;
interface IProps extends ISuccessProps {
  closeSuccessScreen: () => void;
  setOptionToNull: Function;
  setType?: Function;
}

const SuccessScreen = ({
  type,
  show,
  closeSuccessScreen,
  setOptionToNull,
  setType = () => {},
}: IProps) => {
  const dataToShow = profileSuccessData.find((item: any) => item.type === type);

  console.log({ dataToShow });

  const handleProceedButton = () => {
    if (type === "old_pin") {
      closeSuccessScreen();
      setType();
      return;
    } else {
      closeSuccessScreen();
      setOptionToNull();
      return;
    }
  };
  return (
    <ModalEl visible={show}>
      <Wrapper>
        <Header>
          <Pressable onPress={closeSuccessScreen}>
            <CancelIcon />
          </Pressable>
        </Header>
        <MainContent>
          <SuccessIcon />
          <Container>
            {/* <TitleDesc
              title={dataToShow?.title || ""}
              desc={dataToShow?.desc || ""}
              center
              titleFontSize="28px"
              descWidth={type === "old_pin" ? undefined : 310}
            /> */}
          </Container>
        </MainContent>
        {type !== "editProfile" && (
          <ButtonWrapper>
            <ButtonEl onPress={handleProceedButton} showArrow>
              <ButtonText>Proceed</ButtonText>
            </ButtonEl>
          </ButtonWrapper>
        )}
      </Wrapper>
    </ModalEl>
  );
};

export default SuccessScreen;
