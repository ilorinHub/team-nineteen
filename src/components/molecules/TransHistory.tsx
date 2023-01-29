import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Textt } from '../atoms/Typography';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${hp(4)}px;
`;
const PersonName = styled.View`
  flex: 1;
  margin-left: ${wp(4)}px;
`;

const TransHistory = ({
  name,
  amount,
  trans,
  det,
  booking,
}: {
  name?: string;
  amount?: string;
  trans?: string;
  det?: string;
  booking?: any;
}) => {
  return (
    <Wrapper>
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
          <Textt mb={`${hp(1)}`} weight={700} align="right">
            {amount}
          </Textt>
        )}

        <Textt>{trans}</Textt>
      </View>
    </Wrapper>
  );
};

export default TransHistory;
