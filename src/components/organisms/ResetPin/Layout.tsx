import React, { useState, useEffect, Fragment } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import InputField from "../../../components/molecules/InputField";
import { TStage } from ".";
import ButtonEl from "../../molecules/ButtonEl";
import { ButtonText } from "../../../theme/style.component";
import OTPFields from "../../atoms/ConfirmationField";

const Container = styled.View`
  flex-grow: 1;
  padding-bottom: ${hp("3.79%")}px;
`;
const InputWrapper = styled.View<{ grow: boolean }>`
  margin-top: ${hp("4.01%")}px;
  margin-bottom: ${hp("6.7%")}px;

  ${(props) =>
    props.grow &&
    css`
      flex-grow: 1;
    `}
`;
const ButtonWrapper = styled.View`
  width: 100%;
  /* flex-grow: 1; */
  /* justify-content: flex-end; */
`;
const Spacer = styled.View`
  margin-vertical: ${hp("2%")}px;
`;
const CodeFieldWrapper = styled.View`
  margin-top: ${hp("4.02%")}px;
  flex-grow: 1;
`;
const ErrorText = styled.Text`
  color: #e81313;
  margin-top: ${hp("4.9%")}px;
  text-align: center;
`;

type TFields = "email" | "otp" | "pin" | "confirm_pin";

const Layout = ({
  showSuccessScreen,
  stage,
  setStage,
  type,
  setType,
}: {
  showSuccessScreen: Function;
  stage: TStage;
  setStage: Function;
  type: "confirm_pin" | "pin";
  setType: Function;
}) => {
  const defaultData = {
    email: "",
    otp: "",
    pin: "",
    confirm_pin: "",
  };
  const [isFetching, setIsFetching] = useState(false);
  const [formFields, setFormFields] = useState(defaultData);
  const [errorText, setErrorText] = useState(false);

  const title =
    stage === "Reset"
      ? `${stage} PIN`
      : stage === "OTP"
      ? "Enter OTP"
      : stage === "Create" && type === "pin"
      ? "Create New PIN"
      : "Confirm New PIN";

  const desc =
    stage === "Reset"
      ? "Please provide your registered email address"
      : stage === "OTP"
      ? `Please check your mail for OTP`
      : "This PIN will be used to authorise all transactions";

  const updateField = (field: TFields, value: string) => {
    setFormFields((currentFields: any) => ({
      ...currentFields,
      [field]: value,
    }));
  };

  const handleValueChange = (field: any, value: string) => {
    if (errorText) setErrorText(false);
    setFormFields((currentValue) => ({
      ...currentValue,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (stage === "OTP" && formFields["otp"].length === 4) {
      setStage("Create");
    } else if (
      stage === "Create" &&
      type === "pin" &&
      formFields[type].length === 4
    ) {
      setType("confirm_pin");
    } else if (
      stage === "Create" &&
      type === "confirm_pin" &&
      formFields[type].length === 4
    ) {
      if (formFields.confirm_pin !== formFields.pin) {
        setErrorText(true);
      }
    }
  }, [formFields]);

  return (
    <Container>
      {/* <TitleDesc title={title} desc={desc} /> */}
      {stage === "Create" && (
        <Fragment>
          <CodeFieldWrapper>
            <OTPFields
              value={formFields[type]}
              setValue={(val) => handleValueChange(type, val)}
            />
          </CodeFieldWrapper>
          {errorText && (
            <ErrorText>PIN doesn’t match. please try again</ErrorText>
          )}
        </Fragment>
      )}
      {stage === "OTP" && (
        <CodeFieldWrapper>
          <OTPFields
            value={formFields["otp"]}
            setValue={(val) => handleValueChange("otp", val)}
          />
        </CodeFieldWrapper>
      )}
      <InputWrapper grow={stage !== "Reset"}>
        {stage === "Reset" && (
          <InputField
            placeholder="Email"
            type="email"
            label="Email"
            value={formFields.email}
            onChangeText={(text) => updateField("email", text)}
          />
        )}
      </InputWrapper>
      {stage !== "OTP" && (
        <ButtonWrapper>
          <ButtonEl
            showArrow
            disabled={isFetching || (stage === "Create" && type === "pin")}
            onPress={() => {}}
          >
            <ButtonText>{title}</ButtonText>
          </ButtonEl>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default Layout;
