import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText, CContainer } from "../../theme/style.component";
import RenderMap from "../../components/molecules/RenderMap";
import Search from "../RideOptions/Search";
import { useState } from "react";

const Container = styled(CContainer)`
  /* justify-content: center; */
  /* align-items: center; */
`;
const InfoText = styled(AppText)``;

// const  = styled.View``
// const Container = styled.View``
// const Container = styled.View``
// const Container = styled.View``

const Login = () => {
  const [full, setFull] = useState(false);

  return (
    <Container>
      {/* <InfoText>Login</InfoText> */}

      <Search full={full} setFull={setFull} />
    </Container>
  );
};

export default Login;
