import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText, CContainer } from "../../theme/style.component";

const Container = styled(CContainer)`
  justify-content: center;
  align-items: center;
`;
const InfoText = styled(AppText)``;
// const Container = styled.View``

const Login = () => {
  return (
    <Container>
      <InfoText>Login</InfoText>
    </Container>
  );
};

export default Login;
