import React from "react";
import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  AppText,
  ButtonText,
  CContainer,
  CenterContent,
} from "../../theme/style.component";
import { Fragment, useState } from "react";
import InputField from "../../components/molecules/InputField";
import ButtonEl from "../../components/molecules/ButtonEl";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../utils/types";
import { StackNavigationProp } from "@react-navigation/stack";
import BackArrow from "../../components/atoms/icons/BackArrow";
import { Pressable } from "react-native";

const Container = styled(CContainer)`
  flex-direction: column;
  padding-top: ${hp("10%")}px;
  padding-left: ${wp("7%")}px;
  padding-right: ${wp("7%")}px;
`;
const InfoText = styled(AppText)`
  padding-top: ${hp("10%")}px;
  padding-bottom: ${hp("10%")}px;
  font-size: 60px;
  line-height: ;
`;

const InputCon = styled.View`
  flex-direction: column;
  margin-bottom: ${hp("5%")}px;
`;

const SigninCon = styled.View`
  flex-direction: row;
  margin-top: ${hp(2)}px;
  justify-content: center;
`;

const SigninText = styled(AppText)`
  color: ${(props) => props.theme.color.phalanxYellow};
`;

const SpacerHeight = styled.View`
  height: ${hp(1.5)}px;
`;

const HeaderText = styled(AppText)`
  font-size: 42px;
  font-weight: 700;
  max-width: 70%;
  margin-vertical: ${hp(3)}px;
  line-height: normal;
`;

// const Contai = styled.View``

type TSignupNav = StackNavigationProp<RootStackParamsList, "signup">;

const Signup = () => {
  const navigation = useNavigation<TSignupNav>();
  return (
    <Fragment>
      <Container>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </Pressable>
        <HeaderText>Create Your Account</HeaderText>
        <InputCon>
          <InputField type="text" placeholder="FullName" label="FullName" />
          <SpacerHeight />
          <InputField type="email" placeholder="Email" label="Email" />
          <SpacerHeight />

          <InputField
            type="numeric"
            placeholder="Phone Number"
            label="Phone NUmber"
          />
          <SpacerHeight />

          <InputField type="password" placeholder="Password" label="Password" />
        </InputCon>
        <ButtonEl onPress={() => {}}>
          <ButtonText>Sign Up</ButtonText>
        </ButtonEl>
        <SigninCon>
          <AppText>Already have an Account? </AppText>
          <SigninText onPress={() => navigation.navigate("login")}>
            Login
          </SigninText>
        </SigninCon>
      </Container>
    </Fragment>
  );
};

export default Signup;
