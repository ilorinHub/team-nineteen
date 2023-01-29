import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  padding-horizontal: ${wp(5)}px;
  background-color: rgba(0, 0, 0, 0.7);
`;
const MainContent = styled.View`
  background-color: #fff;
  padding-vertical: ${hp(2.68)}px;
  padding-horizontal: ${wp(4)}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
const BookNow = () => {
  return <View></View>;
};

export default BookNow;
