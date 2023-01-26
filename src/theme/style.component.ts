import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const CContainer = styled.View`
  flex-grow: 1;
  background-color: #fff;
`;

export const CenterContent = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FlexRowJustifyBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const AppText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonText = styled(AppText)<{
  color?: string;
}>`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.color.phalanxBlack};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

const SpacerHeight = styled.View`
  height: ${hp(0.95)}px;
`;
