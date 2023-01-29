import React from 'react';
import { Pressable, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';
import Back from '../atoms/icons/BackArrow';
import { Textt } from '../atoms/Typography';

const Container = styled.View<{ centerText?: boolean }>`
  flex-direction: row;
  align-items: center;
  /* justify-content: ; */
  /* ${(props) =>
    props.centerText &&
    css`
      justify-content: space-between;
    `} */
`;

// const HeaderText = styled.Text<{ ml?: string; centerText: boolean }>`
//   color: #0e0400;
//   font-size: 18px;
//   font-weight: 500;
//   ${({ ml }) =>
//     ml &&
//     css`
//       margin-left: ${ml};
//     `}
//   /* margin-left: ${wp('19.32%')}px; */
//   ${(props) =>
//     props.centerText &&
//     css`
//       margin-left: 0px;
//       margin-right: ${wp('11%')}px;
//     `}
// `;

const HeaderWithBackArrow = ({
  headerText = '',
  goBack = () => {},
}: // centerText = false,
// ml,
{
  headerText: string;
  goBack?: Function;
  // centerText?: boolean;
  // ml?: string;
}) => {
  return (
    <Container>
      <Pressable onPress={() => goBack()}>
        <Back color="#000" />
      </Pressable>
      <Textt ml={`${wp(7)}px`} weight={600} size="26px">
        {headerText}
      </Textt>
      {/* <HeaderText ml={ml} centerText={centerText}>
      </HeaderText> */}
      {/* {centerText && <Text />} */}
    </Container>
  );
};

export default HeaderWithBackArrow;
