import { View, Text } from 'react-native';
import React, { Fragment, useState } from 'react';
import { Wrapper } from './Wallet';
import HeaderWithBackArrow from '../components/molecules/HeaderWithBack';
import { useNavigation } from '@react-navigation/native';
import { Textt } from '../components/atoms/Typography';
import InputField from '../components/molecules/InputField';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import ButtonEl from '../components/molecules/ButtonEl';
import ModalEl from '../components/molecules/ModalEl';
import Feedback from '../components/organisms/Feedback';

const NWrapper = styled(Wrapper)`
  padding-bottom: ${hp(7)}px;
  flex: 1;
`;
const InputWrapper = styled.View`
  margin-bottom: ${hp(2)}px;
`;
const InputWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${hp(4)}px;
  flex: 1;
`;
const cardArr = ['Card Name', 'Card Number', 'Expiry Date', 'CVV'];
const TopUp = () => {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState(false);
  return (
    <Fragment>
      <NWrapper>
        <HeaderWithBackArrow headerText="Payment" goBack={navigation.goBack} />
        <InputWrap>
          {cardArr.map((item, indx) => (
            <InputWrapper
              style={{
                width: indx === 2 ? wp(42) : indx === 3 ? wp(42) : wp(89),
              }}
              key={item}
            >
              <Textt size="20px" mb={`${hp(1)}px`} weight={500}>
                {item}
              </Textt>
              <InputField />
            </InputWrapper>
          ))}
        </InputWrap>
        <ButtonEl onPress={() => setFeedback(true)}>
          <Textt>Add New Card</Textt>
        </ButtonEl>
      </NWrapper>
      <ModalEl transparent visible={feedback}>
        <Feedback cancel={() => setFeedback(false)} />
      </ModalEl>
    </Fragment>
  );
};

export default TopUp;
