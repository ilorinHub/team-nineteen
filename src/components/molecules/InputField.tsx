import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import EyeIcon from "../atoms/icons/EyeIcon";
import EyeOffIcon from "../atoms/icons/EyeOffIcon";

interface IProps {
  error?: boolean;
  value?: string;
  label?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onSubmitEditing?: Function;
  type?: "text" | "password" | "numeric" | "phone" | "email";

  style?: Object;
  editable?: boolean;
  openDateTime?: Function;
}

const Input = styled(TextInput)<{ focused: boolean }>`
  background-color: #fafafa;
  padding-horizontal: ${wp(4.1)}px;
  border-radius: 8px;
  height: ${hp(6.75)}px;
  font-weight: 600;
  font-size: 16px;
  line-height: 21.86px;

  ${(props) =>
    props.focused &&
    css`
      background-color: #fffaed;
    `}
`;

const InputWrapper = styled.View<{
  borderError: boolean;
  focused: boolean;
}>`
  overflow: hidden;
  border-radius: 16px;
  background-color: #fafafa;
  border: 1px solid transparent;

  ${(props) =>
    props.borderError &&
    css`
      border-color: ${props.theme.color.error};
    `}

  ${(props) =>
    props.focused &&
    css`
      background-color: #fffaed;
      border-color: ${props.theme.color.phalanxYellow};
    `}
`;

const InputField = ({
  type = "text",
  editable = true,
  value = "",
  label = "",
  error = false,
  onChangeText = () => {},
  onSubmitEditing = () => {},
  placeholder = "",
  disabled = false,
  onFocus = () => {},
  openDateTime,
  style = {},
}: IProps) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [focused, setFocused] = useState(false);
  const isHidePassword = type === "password" && togglePassword;
  const {
    color: { phalanxBlack2, phalanxYellow },
  } = useTheme();
  return (
    <InputWrapper borderError={error} focused={focused}>
      <Input
        focused={focused}
        disabled={disabled}
        keyboardType={
          type === "numeric"
            ? "numeric"
            : type === "email"
            ? "email-address"
            : "default"
        }
        onFocus={() => {
          onFocus();
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onSubmitEditing={() => onSubmitEditing()}
        value={value}
        label={label}
        onChangeText={onChangeText}
        placeholder={focused ? "" : placeholder}
        outlineColor="#fff"
        activeOutlineColor="#fff"
        activeUnderlineColor="#a9a9a9"
        placeholderTextColor="#a9a9a9"
        underlineColorAndroid="transparent"
        textColor={phalanxBlack2}
        underlineColor="transparent"
        secureTextEntry={isHidePassword}
        autoCapitalize="none"
        editable={editable}
        underlineStyle={{ display: "none" }}
        //@ts-ignore
        theme={{ colors: { onSurfaceVariant: "#a9a9a9" } }}
        right={
          type === "password" && (
            <TextInput.Icon
              icon={() => (isHidePassword ? <EyeIcon /> : <EyeOffIcon />)}
              onPress={() => setTogglePassword(!togglePassword)}
              color={(focused) => (focused ? "#fffaed" : phalanxYellow)}
            />
          )
        }
      />
    </InputWrapper>
  );
};

export default InputField;
