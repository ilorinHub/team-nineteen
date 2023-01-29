import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Container = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  padding-horizontal: ${wp(4)}px;
  background-color: rgba(0, 0, 0, 0.7);
`;
const MainContent = styled.View`
  background-color: #fff;
  padding-vertical: ${hp(4)}px;
  padding-horizontal: ${wp(4)}px;
  border-radius: 12px;
`;
const BookNow = () => {
  return (
    <Container>
      <MainContent>
        <Text>We ourtside.....</Text>
      </MainContent>
    </Container>
  );
};

export default BookNow;
