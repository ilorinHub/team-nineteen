import React, { Fragment, useState } from "react";
import { Pressable, View } from "react-native";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Scrollable from "../../../components/atoms/icons/Scrollable";
import BackArrow from "../../../components/atoms/icons/BackArrow";
import { AppText, CContainer } from "../../../theme/style.component";
import ProfileOptionCard from "../../../components/molecules/ProfileOptionCard";
import { securityScreenData } from "../../../data";

const Container = styled(CContainer)`
  padding-top: ${hp("8.26%")}px;
  padding-bottom: ${hp("1.45%")}px;
  padding-horizontal: ${wp("5.07%")}px;
  background-color: #fff;
  flex-grow: 1;
`;

const ArrowWrapper = styled.View`
  margin-bottom: ${hp("3%")}px;
`;
const SecurityOptionWrapper = styled.Pressable``;

const UserWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${hp("4.69%")}px;
  margin-bottom: ${hp("5.36%")}px;
`;

const MainContent = styled.View`
  flex: 1;
  padding-bottom: ${hp("3.58%")}px;
  margin-top: ${hp("1.67%")}px;
`;

const HeaderText = styled(AppText)`
  font-size: 25px;
  font-weight: 600;
  margin-left: ${wp(4)}px;
`;

const Security = ({
  setOptionToNull,
  setSecuritySection = () => {},
}: {
  setOptionToNull: Function;
  setSecuritySection?: Function;
}) => {
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <ArrowWrapper>
        <Pressable onPress={() => setOptionToNull()}>
          <BackArrow />
        </Pressable>
        <HeaderText>Security</HeaderText>
      </ArrowWrapper>

      <MainContent>
        <Scrollable>
          {securityScreenData.map((item: any, itemIndex: number) => {
            return (
              <SecurityOptionWrapper
                onPress={() => {
                  if (
                    item.title === "Change PIN" ||
                    item.title === "Change Password"
                  )
                    setSecuritySection(item.title);
                }}
                key={itemIndex}
              >
                {!item.toggleButton ? (
                  <ProfileOptionCard
                    title={item.title}
                    icon={item.title}
                    onToggleCheck={async () => {}}
                    borderTop={itemIndex !== 0}
                  />
                ) : true ? (
                  <ProfileOptionCard
                    title={item.title}
                    icon={item.title}
                    onToggleCheck={async () => {}}
                    borderTop={itemIndex !== 0}
                  />
                ) : (
                  <View />
                )}
              </SecurityOptionWrapper>
            );
          })}
        </Scrollable>
      </MainContent>
    </Container>
  );
};

export default Security;
