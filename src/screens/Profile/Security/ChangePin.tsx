import { View, Text, Pressable } from "react-native";
import React, { Fragment, useState, useEffect } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText, ButtonText, FlexRow } from "../../../theme/style.component";
import { ISuccessProps } from "..";
import ButtonEl from "../../../components/molecules/ButtonEl";
import BackArrow from "../../../components/atoms/icons/BackArrow";
import OTPFields from "../../../components/atoms/ConfirmationField";
import ResetPin from "../../../components/organisms/ResetPin";

const Container = styled.View`
  padding-top: ${hp("8.25%")}px;

  flex-grow: 1;
  padding-bottom: ${hp("3.79%")}px;
`;
const Header = styled.View`
  margin-bottom: ${hp("3.01%")}px;
  padding-horizontal: ${wp("5.07%")}px;
`;
const MainContent = styled.View`
  flex-grow: 1;
  padding-left: ${wp("5.07%")}px;
  padding-right: ${wp("10.14%")}px;
`;
const ButtonWrapper = styled.View`
  width: 100%;
  padding-horizontal: ${wp("5.07%")}px;
`;
const ForgotPinWrapper = styled(FlexRow)`
  margin-top: ${hp("5.8%")}px;
  justify-content: center;
`;
const ForgotPinWrapper2 = styled(FlexRow)`
  margin-top: ${hp("3.57%")}px;
  justify-content: center;
`;
const NormalText = styled.Text`
  color: #4f4f4f;
  font-size: 16px;
  font-weight: 400;
`;
const Touchable = styled.Pressable`
  margin-left: ${wp("1%")}px;
`;
const ResetText = styled.Text`
  color: ${(props) => props.theme.color.phalanxYellow};
  font-size: 16px;
  font-weight: 700;
`;
const CodeFieldWrapper = styled.View`
  margin-top: ${hp("6.36%")}px;
`;
const ErrorText = styled.Text`
  color: #e81313;
  text-align: center;
  margin-top: ${hp("2%")}px;
`;

const HeaderText = styled(AppText)`
  font-size: 25px;
  font-weight: 600;
  margin-left: ${wp(4)}px;
`;

const ChangePin = ({
  setSectionToNull = () => {},
  setSecuritySection = () => {},
  setSuccess = () => {},
}: {
  setSectionToNull?: Function;
  setSecuritySection?: Function;
  setSuccess?: (option: ISuccessProps) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [option, setOption] = useState<"changePin" | "resetPin">("changePin");

  const [data, setData] = useState({
    old_pin: "",
    new_pin: "",
  });

  const [type, setType] = useState<"old_pin" | "new_pin">("old_pin");
  const titleToDisplay = type === "new_pin" ? "Enter New PIN" : "Change PIN";
  const descText =
    type === "old_pin"
      ? "Enter your current Transaction PIN"
      : "This PIN will be used to authorise all transactions";

  const normalText =
    type === "old_pin"
      ? "Enter your current Transaction PIN"
      : "This PIN will be used to authorise all transactions";

  const handleValueChange = (value: string) => {
    if (errorText) setErrorText(false);
    setData((currentValue) => ({
      ...currentValue,
      [type]: value,
    }));
  };

  return (
    <Fragment>
      {option === "changePin" ? (
        <Container>
          {type === "old_pin" ? (
            <Fragment>
              <Header>
                <Pressable onPress={() => setSectionToNull()}>
                  <BackArrow />
                  <HeaderText>{titleToDisplay}</HeaderText>
                </Pressable>
              </Header>
              <MainContent>
                <CodeFieldWrapper>
                  <OTPFields value={data[type]} setValue={handleValueChange} />
                </CodeFieldWrapper>
                {errorText && (
                  <ErrorText>PIN doesn’t match. please try again</ErrorText>
                )}
                <ForgotPinWrapper>
                  <NormalText>Forgot Pin?</NormalText>
                  <Touchable onPress={() => setOption("resetPin")}>
                    <ResetText>Reset Now!</ResetText>
                  </Touchable>
                </ForgotPinWrapper>
              </MainContent>
              <ButtonWrapper>
                <ButtonEl onPress={() => {}}>
                  <ButtonText>Proceed</ButtonText>
                </ButtonEl>
              </ButtonWrapper>
            </Fragment>
          ) : (
            <Fragment>
              <Header>
                <Pressable
                  onPress={() => {
                    setType("old_pin");
                  }}
                >
                  <BackArrow />
                </Pressable>
                <HeaderText>{titleToDisplay}</HeaderText>
              </Header>
              <MainContent>
                <CodeFieldWrapper>
                  <OTPFields value={data[type]} setValue={handleValueChange} />
                </CodeFieldWrapper>
                <ForgotPinWrapper2>
                  <NormalText>Enter your New 4 digit unique code.</NormalText>
                </ForgotPinWrapper2>
              </MainContent>
              <ButtonWrapper>
                <ButtonEl onPress={() => {}}>
                  <ButtonText>Proceed</ButtonText>
                </ButtonEl>
              </ButtonWrapper>
            </Fragment>
          )}
        </Container>
      ) : (
        <ResetPin setOption={setOption} setSectionToNull={setSectionToNull} />
      )}
    </Fragment>
  );
};

export default ChangePin;
