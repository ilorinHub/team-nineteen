import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText } from "../theme/style.component";

const Container = styled.View``;
const InfoText = styled(AppText)``;
// const Container = styled.View``

const Packages = () => {
  return (
    <Container>
      <InfoText>Packages</InfoText>
    </Container>
  );
};

export default Packages;
