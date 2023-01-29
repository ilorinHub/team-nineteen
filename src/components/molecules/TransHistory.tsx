import { View, Text } from 'react-native';
import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Textt } from '../atoms/Typography';
import UserAvatar from './UserAvatar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${hp(4)}px;
`;
const PersonName = styled.View`
  flex: 1;
  margin-left: ${wp(4)}px;
`;
export const IconWrapper = styled.View`
  padding: 13px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.color.phalanxYellow};
`;
const TransWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Rating = styled(TransWrapper)`
  margin-bottom: ${hp(1.3)}px;
`;

const TransHistory = ({
  name,
  amount,
  trans,
  det,
  booking,
  avatar,
  avatarUrl,
  icon,
  transIcon,
  rating,
}: {
  name?: string;
  amount?: string;
  trans?: string;
  det?: string;
  booking?: any;
  avatar?: string;
  avatarUrl?: string;
  icon?: boolean;
  transIcon?: any;
  rating?: boolean;
}) => {
  const {
    color: { phalanxYellow },
  } = useTheme();
  return (
    <Wrapper>
      {icon ? (
        <IconWrapper>
          <MaterialCommunityIcons name="wallet" size={24} color="black" />
        </IconWrapper>
      ) : (
        <UserAvatar avatarUrl={avatarUrl} text={avatar} />
      )}
      <PersonName>
        <Textt size="18px" weight={600} mb={`${hp(1)}`}>
          {name}
        </Textt>
        <Textt>{det}</Textt>
      </PersonName>
      <View>
        {booking ? (
          booking
        ) : (
          <Rating>
            {rating && (
              <Ionicons
                name="star-half-outline"
                size={18}
                color={phalanxYellow}
                style={{ marginRight: 5 }}
              />
            )}
            <Textt weight={700} align="right">
              {amount}
            </Textt>
          </Rating>
        )}
        <TransWrapper>
          <Textt mr={transIcon ? `${wp(2)}px` : ''}>{trans}</Textt>
          {transIcon}
        </TransWrapper>
      </View>
    </Wrapper>
  );
};

export default TransHistory;
