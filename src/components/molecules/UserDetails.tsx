import React from "react";

import styled, { css } from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import UserAvatar from "./UserAvatar";
import EditProfile from "../atoms/icons/EditProfile";
import { useAuth } from "../../entities/auth.entity";
import { FlexRow } from "../../theme/style.component";

const Container = styled(FlexRow)``;
const UserDetail = styled.View`
  margin-left: ${wp("5.556%")}px;
  flex-grow: 1;
`;
const Name = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #333333;
  text-transform: capitalize;
`;
const UserName = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.color.phalanxYellow};
  margin-top: ${hp("0.446%")}px;
`;
const Touchable = styled.Pressable``;

const UserDetails = ({
  onEditPress = () => {},
}: {
  onEditPress?: () => void;
}) => {
  return (
    <Container>
      <UserAvatar width={92} height={92} bg="#F6F5FA" text="AM" />
      <UserDetail>
        <Name>Asiyanbi Mubashir</Name>
      </UserDetail>
      <Touchable onPress={onEditPress}>
        <EditProfile />
      </Touchable>
    </Container>
  );
};

export default UserDetails;
