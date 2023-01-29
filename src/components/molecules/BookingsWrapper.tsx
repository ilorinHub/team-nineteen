import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TransHistory, { IconWrapper } from './TransHistory';
import { Textt } from '../atoms/Typography';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IsBooking = styled.View`
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: ${hp(2)}px ${wp(4)}px;
  background-color: #fff;
  margin-bottom: ${hp(3)}px;
`;
const More = styled.View``;
const MoreDet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${hp(2)}px;
`;
const DetailsBorder = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  margin-bottom: ${hp(2)}px;
`;
const Location = styled.View`
  border-top-width: 1px;
  border-top-color: lightgray;
  padding-vertical: ${hp(2)}px;
  flex-direction: row;
`;
const DTA = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Status = styled.View<{ status: string }>`
  background-color: ${(props) =>
    props.status === 'Active'
      ? props.theme.color.phalanxYellow
      : props.status === 'Completed'
      ? 'green'
      : 'red'};
  border-radius: 10px;
  padding: ${hp(1)}px ${wp(2)}px;
  margin-bottom: ${hp(1)}px;
`;
const BookingsWrapper = ({ item }: { item: any }) => {
  const [more, setMore] = useState(false);
  return (
    <IsBooking>
      <DetailsBorder>
        <TransHistory
          name={item.name}
          booking={
            <Status status={item.status}>
              <Textt align="center">{item.status}</Textt>
            </Status>
          }
          trans={item.plate}
          det={item.car}
          avatarUrl={item.avatarUrl}
        />
      </DetailsBorder>
      {more && (
        <More>
          <MoreDet>
            <DTA>
              <EvilIcons name="location" size={24} color="black" />
              <Textt>{item.distance}</Textt>
            </DTA>
            <DTA>
              <Ionicons name="time-outline" size={21} color="black" />
              <Textt ml={`${wp(1)}px`}>{item.time}</Textt>
            </DTA>
            <DTA>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={24}
                color="black"
              />
              <Textt ml={`${wp(1)}px`}>{item.amount}</Textt>
            </DTA>
          </MoreDet>
          <MoreDet>
            <Textt size="14px">Date & Time</Textt>
            <Textt>{item.date}</Textt>
          </MoreDet>
          <Location>
            <IconWrapper>
              <MaterialIcons name="my-location" size={24} color="black" />
            </IconWrapper>
            <View style={{ marginLeft: 20 }}>
              <Textt size="18px" weight={600}>
                Current Location
              </Textt>
              <Textt mt={`${hp(1)}px`}>{item.location}</Textt>
            </View>
          </Location>
        </More>
      )}
      <Pressable onPress={() => setMore(!more)}>
        {more ? (
          <MaterialIcons
            style={{ alignSelf: 'center' }}
            name="keyboard-arrow-down"
            size={24}
            color="black"
          />
        ) : (
          <MaterialIcons
            style={{ alignSelf: 'center' }}
            name="keyboard-arrow-up"
            size={24}
            color="black"
          />
        )}
      </Pressable>
    </IsBooking>
  );
};

export default BookingsWrapper;
