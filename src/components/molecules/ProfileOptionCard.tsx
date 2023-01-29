import React, { ReactElement } from "react";

import ForwardArrow from "../atoms/icons/ArrowForward";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import RenderProfileIcon, { IIcon } from "../atoms/RenderProfileIcon";
import ToggleButton from "../atoms/ToggleButton";
import { FlexRow, FlexRowJustifyBetween } from "../../theme/style.component";

const Container = styled(FlexRow)`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
`;
const TitleArrowWrapper = styled(FlexRowJustifyBetween)<{
  borderTop: boolean;
  borderBottom: boolean;
}>`
  margin-left: ${wp("5.07%")}px;
  flex-grow: 1;
  border: 0.5px solid transparent;
  padding-vertical: ${hp("2.45%")}px;

  ${(props) =>
    props.borderTop &&
    css`
      border-top-color: #e0e0e0;
    `}
  ${(props) =>
    props.borderBottom &&
    css`
      border-bottom-color: #e0e0e0;
    `}
`;
const Title = styled.Text`
  color: ${(props) => props.theme.color.phalanxBlack};
  font-size: 16px;
`;

const ProfileOptionCard = ({
  title,
  icon,
  borderTop = false,
  borderBottom = false,
  toggleButton = false,
  onToggleCheck = () => {},
  isChecked = false,
}: {
  title: string;
  icon?: IIcon;
  borderTop?: boolean;
  borderBottom?: boolean;
  toggleButton?: boolean;
  onToggleCheck?: () => void;
  isChecked?: boolean;
}) => {
  return (
    <Container>
      {/* {icon && <RenderProfileIcon icon={icon} />} */}
      <TitleArrowWrapper borderBottom={borderBottom} borderTop={borderTop}>
        <Title>{title}</Title>
        {toggleButton ? (
          <ToggleButton onToggle={onToggleCheck} checked={isChecked} />
        ) : (
          <ForwardArrow />
        )}
      </TitleArrowWrapper>
    </Container>
  );
};

export default ProfileOptionCard;
