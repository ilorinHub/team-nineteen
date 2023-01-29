import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer, FlexRowJustifyBetween } from "../../theme/style.component";

export const Container = styled(CContainer)`
  padding-top: ${hp("8.26%")}px;
  padding-bottom: ${hp("1.45%")}px;
  padding-left: ${wp("5.31%")}px;
  padding-right: ${wp("5.07%")}px;
  background-color: #fff;
  flex-grow: 1;
`;

export const HeaderWrapper = styled(FlexRowJustifyBetween)`
  margin-bottom: ${hp("5.47%")}px;
`;

export const ScreenName = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => props.theme.color.phalanxYellow};
`;
export const BarCode = styled.Pressable``;
export const UserDetailsWrapper = styled.View``;
export const ProfileReferralWrapper = styled.Pressable`
  margin-vertical: ${hp("2.01%")}px;
  /* margin-horizontal: 5px; */
`;
export const ProfileOptions = styled.View``;
export const MainContent = styled.View`
  flex-grow: 1;
  padding-top: ${hp("2%")}px;
  padding-bottom: ${hp("2%")}px;
`;
export const ProfileOptionWrapper = styled.Pressable``;
export const Version = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.color.phalanxYellow};
  text-align: center;
`;
