import { View, Text, Pressable } from 'react-native';
import React, { Fragment, useState } from 'react';
import { Textt } from '../components/atoms/Typography';
import styled from 'styled-components/native';
import { Wrapper } from './Wallet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BookingsWrapper from '../components/molecules/BookingsWrapper';
import HeaderWithBackArrow from '../components/molecules/HeaderWithBack';
import { useNavigation } from '@react-navigation/native';
import { TInitNav } from './InitScreen';
import Scrollable from '../components/atoms/icons/Scrollable';
import ButtonEl from '../components/molecules/ButtonEl';
import ModalEl from '../components/molecules/ModalEl';
import BookNow from '../components/organisms/BookNow';

const BookingHeader = styled.View`
  flex-direction: row;
  margin-top: ${hp(3)}px;
`;
const HeaderText = styled.View<{ focused?: boolean }>`
  border-bottom-width: ${({ focused }) => (focused ? '2px' : '1px')};
  border-bottom-color: ${(props) =>
    props.focused ? props.theme.color.phalanxYellow : 'grey'};
  padding-horizontal: ${wp(5.5)}px;
  padding-bottom: ${hp(1)}px;
  margin-bottom: ${hp(4)}px;
`;
const Active = styled.View`
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Empty = styled.View`
  margin-top: ${hp(20)}px;
  justify-content: center;
  align-items: center;
`;

const bookingArr = ['Active Now', 'Completed', 'Cancelled'];
const Bookings = () => {
  const actives: any = [
    {
      name: 'Daniel Austin',
      status: 'Active',
      plate: 'APP 38GZ',
      time: '4 mins',
      amount: '#700',
      distance: '4.5 km',
      date: 'Dec 20, 2024 | 10:00 AM',
      location: 'Kwara state banquet hall',
      car: 'Mercedes-Benz Gle 63',
      avatarUrl:
        'https://gravatar.com/avatar/4e37ed0339d3514072241d252a558309?s=400&d=robohash&r=x',
    },
    {
      name: 'Wade Warren',
      status: 'Active',
      plate: 'ILR 345GZ',
      time: '14 mins',
      amount: '#1700',
      distance: '9 km',
      date: 'Apr 15, 2023 | 12:00 AM',
      location: 'Osapa Mandate',
      car: 'Mercedes-Benz Gle 63',
      avatarUrl:
        'https://gravatar.com/avatar/aea33069ad6b86053c7840f6b4e33c34?s=400&d=robohash&r=x',
    },
  ];
  const complete: any = [
    {
      name: 'Guy Hawkins',
      status: 'Completed',
      plate: 'APP 38GZ',
      time: '9 mins',
      amount: '#1200',
      distance: '5 km',
      date: 'Jun 20, 2024 | 10:00 AM',
      location: 'Kwara state banquet hall',
      car: 'Toyota Corolla',
      avatarUrl:
        'https://gravatar.com/avatar/4860105725ad49ed5c2bd5c4231f5157?s=400&d=robohash&r=x',
    },
    {
      name: 'Jane Cooper',
      status: 'Completed',
      plate: 'ILR 345GZ',
      time: '10 mins',
      amount: '#1500',
      distance: '7.3 km',
      date: 'Aug 15, 2023 | 12:00 AM',
      location: 'Osapa Mandate',
      car: 'Toyota Camry',
      avatarUrl:
        'https://gravatar.com/avatar/8af622f1432b5cb5630a9b2bb5adc3a4?s=400&d=robohash&r=x',
    },
  ];
  const [bookNow, setBookNow] = useState(false);
  const [cat, setCat] = useState('Active Now');
  const [active, setActive] = useState(actives);
  const [completed, setCompleted] = useState(complete);
  const navigation = useNavigation<TInitNav>();
  return (
    <Fragment>
      <Wrapper>
        <Header>
          <HeaderWithBackArrow
            headerText="Booking"
            goBack={navigation.goBack}
          />
          <ButtonEl onPress={() => setBookNow(true)} height={50}>
            <Textt size="20px" weight={600}>
              Book Now
            </Textt>
          </ButtonEl>
        </Header>
        <BookingHeader>
          {bookingArr.map((item) => (
            <Pressable onPress={() => setCat(item)} key={item}>
              <HeaderText focused={item === cat}>
                <Textt>{item}</Textt>
              </HeaderText>
            </Pressable>
          ))}
        </BookingHeader>
        {cat === 'Active Now' && (
          <Active>
            {!active.length ? (
              <Empty>
                <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
                  You have no active taxi booking
                </Textt>
                <Textt>You don't have an active taxi booking at the time</Textt>
              </Empty>
            ) : (
              <Scrollable>
                {active.map((item: any) => (
                  <BookingsWrapper item={item} />
                ))}
              </Scrollable>
            )}
          </Active>
        )}
        {cat === 'Completed' && (
          <Active>
            {!completed.length ? (
              <Empty>
                <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
                  You have no completed taxi booking
                </Textt>
                <Textt>
                  You don't have a completed taxi booking at the time
                </Textt>
              </Empty>
            ) : (
              <Scrollable>
                {completed.map((item: any) => (
                  <BookingsWrapper item={item} />
                ))}
              </Scrollable>
            )}
          </Active>
        )}
        {cat === 'Cancelled' && (
          <Empty>
            <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
              You have no cancelled taxi booking
            </Textt>
            <Textt>You don't have a cancelled taxi booking at the time</Textt>
          </Empty>
        )}
      </Wrapper>
      <ModalEl transparent visible={bookNow}>
        <BookNow />
      </ModalEl>
    </Fragment>
  );
};

export default Bookings;
