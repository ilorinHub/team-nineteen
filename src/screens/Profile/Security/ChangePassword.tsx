import React, { useState } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackArrow from "../../../components/atoms/icons/BackArrow";
import { Pressable } from "react-native";
import { AppText, ButtonText } from "../../../theme/style.component";
import InputField from "../../../components/molecules/InputField";
import ButtonEl from "../../../components/molecules/ButtonEl";
import KeyboardAvoidView from "../../../components/molecules/KeyboardAvoidView";

const Container = styled.View`
  padding-top: ${hp("8.25%")}px;
  padding-bottom: ${hp("3.79%")}px;
  padding-horizontal: ${wp("5.07%")}px;
  flex-grow: 1;
`;
const Header = styled.View`
  margin-bottom: ${hp("4.07%")}px;
`;
const MainContent = styled.View`
  flex-grow: 1;
`;
const InputWrapper = styled.View`
  margin-top: ${hp("4.01%")}px;
  margin-bottom: ${hp("6.7%")}px;
  flex-grow: 1;
`;
const ButtonWrapper = styled.View`
  width: 100%;
`;
const Spacer = styled.View`
  margin-vertical: ${hp("2%")}px;
`;

const HeaderText = styled(AppText)`
  font-size:25px;
  font-weight:600;
  margin-top:${hp(4)}px;
`

type TFields = "old_password" | "new_password" | "confirm_password";

const ChangePassword = ({
  setSectionToNull = () => {},
  setSecuritySection = () => {},
  setSuccess = () => {},
}: {
  setSectionToNull?: Function;
  setSecuritySection?: Function;
  setSuccess?: Function;
}) => {
  return (
    <KeyboardAvoidView>
      <Container>
        <Header>
          <Pressable onPress={() => setSectionToNull()}>
            <BackArrow />
          </Pressable>
          <HeaderText>Change Password</HeaderText>
        </Header>
        <MainContent>
         
          <InputWrapper>
            <InputField
              placeholder="Enter Old Password"
              type="password"
              label="Enter Old Password"
            />
            <Spacer>
              <InputField
                placeholder="Enter New Password"
                type="password"
                label="Enter New Password"
              />
            </Spacer>
            <InputField
              placeholder="Confirm New Password"
              type="password"
              label="Confirm New Password"
            />
          </InputWrapper>
          <ButtonEl
          >
            <ButtonText>Proceed</ButtonText>
          </ButtonEl>
        </MainContent>
      </Container>
    </KeyboardAvoidView>
  );
};

export default ChangePassword;
