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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services";
import { handleFetchError } from "../../utils/fetch";
import { toastSuccess } from "../../utils/common";
import KeyboardAvoidView from "../../components/molecules/KeyboardAvoidView";

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
type TFormField = "email" | "password" | "phoneNumber" | "fullName";

const Signup = () => {
  const navigation = useNavigation<TSignupNav>();
  const defaultForm = {
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
  };

  const [form, setForm] = useState(defaultForm);

  const updateField = (field: TFormField, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const signup = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      toastSuccess("Signup Successful");
      navigation.navigate("login");
    } catch (error) {
      handleFetchError(error);
    }
  };
  return (
    <KeyboardAvoidView>
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
          <InputField
            type="text"
            placeholder="FullName"
            label="FullName"
            value={form.fullName}
            onChangeText={(text) => updateField("fullName", text)}
          />
          <SpacerHeight />
          <InputField
            type="email"
            placeholder="Email"
            label="Email"
            value={form.email}
            onChangeText={(text) => updateField("email", text)}
          />
          <SpacerHeight />

          <InputField
            type="numeric"
            placeholder="Phone Number"
            label="Phone Number"
            value={form.phoneNumber}
            onChangeText={(text) => updateField("phoneNumber", text)}
          />
          <SpacerHeight />

          <InputField
            type="password"
            placeholder="Password"
            label="Password"
            value={form.password}
            onChangeText={(text) => updateField("password", text)}
          />
        </InputCon>
        <ButtonEl
          onPress={() => {
            signup();
          }}
        >
          <ButtonText>Sign Up</ButtonText>
        </ButtonEl>
        <SigninCon>
          <AppText>Already have an Account? </AppText>
          <SigninText onPress={() => navigation.navigate("login")}>
            Login
          </SigninText>
        </SigninCon>
      </Container>
    </KeyboardAvoidView>
  );
};

export default Signup;
