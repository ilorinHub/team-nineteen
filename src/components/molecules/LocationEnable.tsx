import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText, ButtonText, CContainer } from "../../theme/style.component";
import ModalEl from "./ModalEl";
import ButtonEl from "./ButtonEl";

const Container = styled(CContainer)`
  background-color: #54565a;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${wp(4)}px;
`;
const InfoText = styled(AppText)``;
const Box = styled.View`
  background-color: #fff;
  width: ${wp(82)}px;
  padding-vertical: ${hp(4)}px;
  padding-horizontal: ${wp(9)}px;
  border-radius: 10px;
`;
const HeaderText = styled(AppText)`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;
const DescText = styled(AppText)`
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(3)}px;
  text-align: center;
`;
const SpacerHeight = styled.View`
  height: ${hp(2)}px;
`;
// const Container = styled.View``
// const Container = styled.View``
// const Container = styled.View``

const LocationEnable = ({ show, setShow }: { show: boolean; setShow:Function; }) => {
  return (
    <ModalEl visible={show} animate transparent>
      <Container>
        <Box>
          <HeaderText>Enable Location</HeaderText>
          <DescText>
            We need access to your location to be able to use this service
          </DescText>
          <ButtonEl onPress={() => {}} height={60}>
            <ButtonText>Enable Location</ButtonText>
          </ButtonEl>
          <SpacerHeight />
          <ButtonEl onPress={() => {setShow(false)}} bg="#fff8e8" height={60}>
            <ButtonText>Not Now</ButtonText>
          </ButtonEl>
        </Box>
      </Container>
    </ModalEl>
  );
};

export default LocationEnable;
