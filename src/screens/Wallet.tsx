import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { AppText } from '../theme/style.component';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Textt } from '../components/atoms/Typography';
import ButtonEl from '../components/molecules/ButtonEl';
import TransHistory from '../components/molecules/TransHistory';
import { useNavigation } from '@react-navigation/native';
import { TInitNav } from './InitScreen';
import { Fontisto } from '@expo/vector-icons';
import Scrollable from '../components/atoms/icons/Scrollable';
import HeaderWithBackArrow from '../components/molecules/HeaderWithBack';

export const Wrapper = styled.View`
  padding-top: ${hp(6)}px;
  padding-horizontal: ${wp(5.13)}px;
  flex: 1;
`;
export const CardWrapper = styled.View<{ bg?: string }>`
  background-color: ${(props) => props.bg || props.theme.color.phalanxYellow};
  margin-vertical: ${hp(3.5)}px;
  padding-horizontal: ${wp(5.13)}px;
  padding-vertical: ${hp(3)}px;
  border-radius: 20px;
`;
const CardName = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const CardBttom = styled(CardName)`
  align-items: center;
  margin-top: ${hp(1)}px;
`;
const Spacer = styled.View`
  width: ${wp(1)}px;
`;

const transArr = [
  {
    name: 'Daniel Austin',
    amount: '#400',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
    avatar: 'DA',
    transIcon: <Fontisto name="upload" size={16} color="red" />,
  },
  {
    name: 'Top Up Wallet',
    amount: '#8000',
    trans: 'Top Up',
    det: 'Dec 20, 2024 | 11:00 AM',
    avatar: 'DA',
    transIcon: <Fontisto name="download" size={16} color="blue" />,
  },
  {
    name: 'Sarah Wilson',
    amount: '#1000',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
    avatar: 'SW',
    transIcon: <Fontisto name="upload" size={16} color="red" />,
  },
  {
    name: 'Benny Spanbauer',
    amount: '#260',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
    avatar: 'BS',
    transIcon: <Fontisto name="upload" size={16} color="red" />,
  },
  {
    name: 'Top Up Wallet',
    amount: '#1500',
    trans: 'Top Up',
    det: 'Dec 20, 2024 | 11:00 AM',
    avatar: 'DA',
    transIcon: <Fontisto name="download" size={16} color="blue" />,
  },
];
const Wallet = () => {
  const navigation = useNavigation<TInitNav>();
  return (
    <Wrapper>
      <HeaderWithBackArrow headerText="Wallet" goBack={navigation.goBack} />
      <CardWrapper>
        <CardName>
          <Textt color="#fff" weight={600} size="24px">
            Andrew Ainsley
          </Textt>
          <Textt color="#fff" weight={700} size="34px">
            VISA
          </Textt>
        </CardName>
        <Textt size="22px" mb={`${hp(2)}px`} color="#fff">
          .... .... .... 3629
        </Textt>
        <Textt size="18px" color="#fff">
          Your balance
        </Textt>
        <CardBttom>
          <Textt color="#fff" weight={700} size="42px">
            #9957.5
          </Textt>
          <ButtonEl
            onPress={() => navigation.navigate('topup')}
            height={hp(5)}
            bg="#fff"
          >
            <>
              <Fontisto name="wallet" size={16} color="black" />
              <Spacer />
              <Textt>Top Up</Textt>
            </>
          </ButtonEl>
        </CardBttom>
      </CardWrapper>
      <Textt mb={`${hp(3)}`} size="24px" weight={600}>
        Transaction History
      </Textt>
      <Scrollable>
        {transArr.map((item, indx) => (
          <TransHistory icon={indx === 1 || indx === 4} {...item} />
        ))}
      </Scrollable>
    </Wrapper>
  );
};

export default Wallet;
