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

export const Wrapper = styled.View`
  padding-top: ${hp(6)}px;
  padding-horizontal: ${wp(5.13)}px;
`;
const CardWrapper = styled.View`
  background-color: ${(props) => props.theme.color.phalanxYellow};
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
`;

const transArr = [
  {
    name: 'Daniel Austin',
    amount: '#14',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
  },
  {
    name: 'Top Up Wallet',
    amount: '#80',
    trans: 'Top Up',
    det: 'Dec 20, 2024 | 11:00 AM',
  },
  {
    name: 'Sarah Wilson',
    amount: '#24',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
  },
  {
    name: 'Benny Spanbauer',
    amount: '#26',
    trans: 'Taxi Expenses',
    det: 'Dec 20, 2024 | 11:00 AM',
  },
  {
    name: 'Top Up Wallet',
    amount: '#100',
    trans: 'Top Up',
    det: 'Dec 20, 2024 | 11:00 AM',
  },
];
const Wallet = () => {
  const navigation = useNavigation<TInitNav>();
  return (
    <Wrapper>
      <Textt weight={600} size="27px">
        Wallet
      </Textt>
      <CardWrapper>
        <CardName>
          <Textt color="#fff" size="22px">
            Andrew Ainsley
          </Textt>
          <Textt color="#fff" weight={700} size="32px">
            VISA
          </Textt>
        </CardName>
        <Textt color="#fff">.... .... .... 3629</Textt>
        <Textt color="#fff">Your balance</Textt>
        <CardBttom>
          <Textt color="#fff" weight={700} size="40px">
            #9957.5
          </Textt>
          <ButtonEl
            onPress={() => navigation.navigate('topup')}
            height={hp(4)}
            bg="#fff"
          >
            <Textt>Top Up</Textt>
          </ButtonEl>
        </CardBttom>
      </CardWrapper>
      <Textt mb={`${hp(3)}`} size="24px" weight={600}>
        Transaction History
      </Textt>
      {transArr.map((item) => (
        <TransHistory {...item} />
      ))}
    </Wrapper>
  );
};

export default Wallet;
