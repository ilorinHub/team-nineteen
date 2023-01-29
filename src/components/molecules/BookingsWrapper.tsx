import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TransHistory from './TransHistory';
import { Textt } from '../atoms/Typography';

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
        />
      </DetailsBorder>
      {more && (
        <More>
          <MoreDet>
            <Textt>{item.distance}</Textt>
            <Textt>{item.time}</Textt>
            <Textt>{item.amount}</Textt>
          </MoreDet>
          <MoreDet>
            <Textt>Date & Time</Textt>
            <Textt>{item.date}</Textt>
          </MoreDet>
          <Location>
            <Textt size="18px" weight={600}>
              Current Location
            </Textt>
            <Textt mt={`${hp(1)}px`}>{item.location}</Textt>
          </Location>
        </More>
      )}
      <Pressable onPress={() => setMore(!more)}>
        <Textt align="center">he</Textt>
      </Pressable>
    </IsBooking>
  );
};

export default BookingsWrapper;
