import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText } from "../../theme/style.component";
import BackArrow from "./icons/BackArrow";

const Container = styled.Pressable`
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 10;
  top: 70px;
  left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
// const Container = styled.View``

const AbsoluteArrow = ({ goBack }: { goBack: Function }) => {
  return (
    <Container
      onPress={() => {
        goBack();
      }}
    >
      <BackArrow />
    </Container>
  );
};

export default AbsoluteArrow;
