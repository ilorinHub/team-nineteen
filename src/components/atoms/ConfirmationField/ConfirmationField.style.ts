import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";
import { AppText } from "../../../theme/style.component";

export const View = styled.View<{ focused: boolean }>`
  width: ${wp(11.11)}px;
  height: ${hp(5)}px;
  border-width: 1px;
  border-color: #e8e8e8;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.focused &&
    css`
      border-color: #b4f501;
    `};
`;

export const Text = styled(AppText)`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #0f0f0f;
`;
