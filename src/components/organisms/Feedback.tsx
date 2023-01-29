import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Textt } from '../atoms/Typography';
import TransHistory from '../molecules/TransHistory';
import ButtonEl from '../molecules/ButtonEl';

const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  padding-horizontal: ${wp(7)}px;
  background-color: rgba(0, 0, 0, 0.7);
`;
const MainContent = styled.View`
  background-color: #fff;
  padding-vertical: ${hp(2.68)}px;
  padding-horizontal: ${wp(6.52)}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
const DriverDetails = styled.View`
  padding-top: ${hp(2)}px;
  margin-vertical: ${hp(2)}px;
  border-top-width: 1px;
  border-top-color: lightgray;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;
const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: lightgray;
  padding-top: ${hp(2)}px;
  margin-top: ${hp(2)}px;
`;

const Feedback = ({ cancel }: { cancel: () => void }) => {
  return (
    <Container>
      <MainContent>
        <Textt align="center" size="24px" weight={600}>
          Rate Driver
        </Textt>
        <DriverDetails>
          <TransHistory
            name="Daniel Austin"
            amount="4.8"
            trans="HSW 4736 XK"
            det="Mercedes-Benz C300"
          />
        </DriverDetails>
        <Textt align="center" size="24px" weight={600}>
          How is your driver?
        </Textt>
        <Textt align="center" mt={`${hp(2)}px`}>
          Please rate your driver...
        </Textt>
        <ButtonWrapper>
          <ButtonEl onPress={cancel} width={wp(33)} bg="#ced6a8">
            <Textt>Cancel</Textt>
          </ButtonEl>
          <ButtonEl width={wp(33)}>
            <Textt>Submit</Textt>
          </ButtonEl>
        </ButtonWrapper>
      </MainContent>
    </Container>
  );
};

export default Feedback;
