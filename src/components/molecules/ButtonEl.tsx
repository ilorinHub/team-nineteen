import React, { Fragment, ReactElement } from "react";
import styled, { css } from "styled-components/native";
import { Button as PButton } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface IButtonProps {
  children?: ReactElement;
  disabled?: boolean;
  onPress?: Function;
  loading?: boolean;
  showArrow?: boolean;
  outline?: boolean;
  bg?: string;
  disabledColor?: string;
  height?: number;
  width?: number;
}

// style
const Button = styled(PButton)<{
  outline?: boolean;
  bg?: string;
  disabled?: boolean;
  disabledColor?: string;
}>`
  width: 100%;
  border-radius: 30px;
  background-color: ${(props) => props.theme.color.phalanxYellow};

  ${(props) =>
    props.outline &&
    css`
      background-color: #fff;
      border: 0.5px solid ${props.theme.color.phalanxYellow};
    `}

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.color.disabled};
    `}

    ${(props) =>
    props.disabled &&
    props.outline &&
    css`
      background-color: #fff;
      opacity: 0.5;
    `}
`;

const ButtonEl = ({
  onPress = () => {},
  disabled,
  disabledColor,
  children,
  loading,
  bg,
  height,
  width,
  outline = false,
}: IButtonProps) => {
  const customHeight = height ? (height / 926) * 100 : 0;
  const customWidth = width ? (width / 428) * 100 : 0;
  return (
    <Button
      bg={bg}
      loading={loading}
      disabled={disabled}
      disabledColor={disabledColor}
      mode="contained"
      onPress={() => onPress()}
      contentStyle={[
        {
          height: height ? hp(customHeight) : hp(7.4),
          width: width ? wp(customWidth) : "auto",
        },
      ]}
      uppercase={false}
      outline={outline}
    >
      <Fragment>{children}</Fragment>
    </Button>
  );
};

export default ButtonEl;
