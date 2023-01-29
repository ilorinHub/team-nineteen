import React, { useState } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Security from "./Security";

import { ISuccessProps } from "..";
import ChangePin from "./ChangePin";
import ChangePassword from "./ChangePassword";
import { CContainer } from "../../../theme/style.component";

const Container = styled(CContainer)`
  flex-grow: 1;
`;

export type ISecuritySection = null | "Change Password" | "Change PIN" | "";
const Index = ({
  setOptionToNull,
  setSuccess,
}: {
  setOptionToNull: Function;
  setSuccess: (option: ISuccessProps) => void;
}) => {
  const [securitySection, setSecuritySection] =
    useState<ISecuritySection>(null);

  const handleSectionNull = () => {
    setSecuritySection(null);
  };
  return (
    <Container>
      {securitySection === null && (
        <Security
          setOptionToNull={setOptionToNull}
          setSecuritySection={setSecuritySection}
        />
      )}
      {securitySection === "Change PIN" && (
        <ChangePin
          setSectionToNull={handleSectionNull}
          setSecuritySection={setSecuritySection}
          setSuccess={setSuccess}
        />
      )}
      {securitySection === "Change Password" && (
        <ChangePassword
          setSectionToNull={handleSectionNull}
          setSecuritySection={setSecuritySection}
          setSuccess={setSuccess}
        />
      )}
    </Container>
  );
};

export default Index;
