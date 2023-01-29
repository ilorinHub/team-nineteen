import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SuccessScreen from "./SuccessScreen";
import Layout from "./Layout";
import BackArrow from "../../atoms/icons/BackArrow";
import CancelIcon from "../../atoms/icons/CancelIcon";

const Container = styled.View`
  padding-top: ${hp("8.25%")}px;
  padding-horizontal: ${wp("5.07%")}px;
  flex-grow: 1;
`;
const Header = styled.View`
  margin-bottom: ${hp("4.01%")}px;
`;
const MainContent = styled.View`
  flex-grow: 1;
`;

interface IProps {
  setOption?: Function;
  setSectionToNull: Function;
}
export type TStage = "Reset" | "OTP" | "Create";

const Index = ({ setOption = () => {}, setSectionToNull }: IProps) => {
  const [isSuccessScreen, setIsSuccessScreen] = useState(false);
  const [stage, setStage] = useState<TStage>("Reset");
  const [type, setType] = useState<"pin" | "confirm_pin">("pin");

  return (
    <Container>
      <Header>
        {stage === "Reset" || isSuccessScreen ? (
          <Pressable
            onPress={() =>
              isSuccessScreen ? setSectionToNull() : setOption("changePin")
            }
          >
            <CancelIcon />
          </Pressable>
        ) : (
          <Pressable
            onPress={() =>
              stage === "OTP"
                ? setStage("Reset")
                : type === "confirm_pin"
                ? setType("pin")
                : setStage("OTP")
            }
          >
            <BackArrow />
          </Pressable>
        )}
      </Header>
      <MainContent>
        {isSuccessScreen ? (
          <SuccessScreen setSectionToNull={setSectionToNull} />
        ) : (
          <Layout
            type={type}
            setType={setType}
            showSuccessScreen={() => setIsSuccessScreen(true)}
            stage={stage}
            setStage={setStage}
          />
        )}
      </MainContent>
    </Container>
  );
};

export default Index;
