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
import { Pressable } from "react-native";
import BackArrow from "../../components/atoms/icons/BackArrow";
import { handleFetchError } from "../../utils/fetch";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services";
import { setAuth } from "../../entities/auth.entity";
import KeyboardAvoidView from "../../components/molecules/KeyboardAvoidView";
import { toastSuccess } from "../../utils/common";

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

const OneInput = styled.View`
  margin-bottom: 15px;
`;
const ContinueCon = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${hp("7%")}px; ;
`;

const ContBorder = styled.Text`
  height: 1px;
  flex-grow: 1;
  background-color: #cacaca;
  margin: 10px;
`;

const SigninCon = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: ${hp(2)}px;
`;

const SigninText = styled(AppText)`
  color: ${(props) => props.theme.color.phalanxYellow};
`;

const SpacerHeight = styled.View`
  height: ${hp(5)}px;
`;
const HeaderText = styled(AppText)`
  font-size: 42px;
  font-weight: 700;
  max-width: 70%;
  margin-vertical: ${hp(3)}px;
  line-height: normal;
`;

type TLoginNav = StackNavigationProp<RootStackParamsList, "login">;
type TFormField = "email" | "password";

const Login = () => {
  const navigation = useNavigation<TLoginNav>();
  const defaultForm = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(defaultForm);

  const updateField = (field: TFormField, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const login = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log({ user });

      setAuth(user, "123");
      toastSuccess("Welcome to Phalanx");
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
        <HeaderText>Login to Your Account</HeaderText>

        <InputCon>
          <OneInput>
            <InputField
              type="email"
              placeholder="Email"
              label="Email"
              value={form.email}
              onChangeText={(text) => updateField("email", text)}
            />
          </OneInput>

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
            login();
            // navigation.navigate("bookings");
          }}
        >
          <ButtonText>Login</ButtonText>
        </ButtonEl>

        <SigninCon>
          <AppText>Don't have an Account? </AppText>
          <SigninText onPress={() => navigation.navigate("signup")}>
            Sign Up
          </SigninText>
        </SigninCon>
      </Container>
    </KeyboardAvoidView>
  );
};

export default Login;
