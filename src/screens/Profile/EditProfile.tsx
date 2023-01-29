import React, { Fragment, useState } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  AppText,
  ButtonText,
  CContainer,
  FlexRow,
} from "../../theme/style.component";
import KeyboardAvoidView from "../../components/molecules/KeyboardAvoidView";
import BackArrow from "../../components/atoms/icons/BackArrow";
import { ISuccessProps } from ".";
import InputField from "../../components/molecules/InputField";
import Scrollable from "../../components/atoms/icons/Scrollable";
import UserAvatar from "../../components/molecules/UserAvatar";
import ButtonEl from "../../components/molecules/ButtonEl";

const Wrapper = styled.View`
  flex-grow: 1;
`;
const Container = styled(CContainer)`
  padding-top: ${hp("8.26%")}px;
  padding-bottom: ${hp(3)}px;
  padding-horizontal: ${wp("5.07%")}px;
  background-color: #fff;
  flex-grow: 1;
`;
const ArrowWrapper = styled.Pressable`
  /* margin-bottom: ${hp("3%")}px; */
`;

const UserWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${hp("4.69%")}px;
  margin-bottom: ${hp("5.36%")}px;
`;

const MainContent = styled.View`
  flex-grow: 1;
  padding-bottom: ${hp("2.58%")}px;
`;
const Spacer = styled.View`
  margin-vertical: ${hp("1.78%")}px;
`;
const PhoneCountryField = styled(FlexRow)`
  margin-top: ${hp("1.78%")}px;
`;
const ButtonWrapper = styled.View`
  margin-top: ${hp("0.58%")}px;
`;
const HeaderText = styled(AppText)`
  font-size: 25px;
  font-weight: 600;
  margin-left: ${wp(4)}px;
`;

type TProfileFields = "firstName" | "Email" | "phone";

const EditProfile = ({
  setOptionToNull,
  setSuccess,
}: {
  setOptionToNull: Function;
  setSuccess: (option: ISuccessProps) => void;
}) => {
  return (
    <Fragment>
      <Wrapper>
        <KeyboardAvoidView extraHeight={120}>
          <Container>
            <FlexRow>
              <ArrowWrapper
                onPress={() => {
                  setOptionToNull();
                }}
              >
                <BackArrow />
              </ArrowWrapper>
              <HeaderText>Edit Profile</HeaderText>
            </FlexRow>
            <UserWrapper>
              <UserAvatar
                width={108}
                height={108}
                text="AM"
                bg="#F6F5FA"
                editable
              />
            </UserWrapper>
            <MainContent>
              <Scrollable>
                <InputField placeholder="FullName" label="FullName" />
                <Spacer>
                  <InputField type="email" placeholder="Email" label="Email" />
                </Spacer>
                <InputField
                  type="numeric"
                  placeholder="Phone Number"
                  label="Phone Number"
                />
              </Scrollable>
            </MainContent>
            <ButtonWrapper>
              <ButtonEl>
                <ButtonText>Update Profile</ButtonText>
              </ButtonEl>
            </ButtonWrapper>
          </Container>
        </KeyboardAvoidView>
      </Wrapper>
    </Fragment>
  );
};

export default EditProfile;
