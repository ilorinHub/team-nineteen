import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText, ButtonText, CContainer } from "../theme/style.component";
import ButtonEl from "../components/molecules/ButtonEl";
import { StackNavigationProp } from "@react-navigation/stack";
import { RideParams, RootStackParamsList } from "../utils/types";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";

const Container = styled(CContainer)`
  padding-horizontal: ${wp(5.13)}px;
  padding-top: ${hp(40)}px;
  background-color: #fffaed;
`;
const InfoText = styled(AppText)`
  text-align: center;
  color: ${(props) => props.theme.color.phalanxYellow};
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
`;

const AppName = styled(InfoText)`
  margin-top: ${hp(1.5)}px;
`;
const ButtonWrapper = styled.View`
  margin-top: ${hp(20)}px;
`;
// const Container = styled.View``

type TInitNav = StackNavigationProp<RootStackParamsList, "Init">;

const InitScreen = () => {
  const navigation = useNavigation<TInitNav>();

  return (
    <Container>
      <InfoText>Welcome to</InfoText>
      <AppName>Phalanx Ride</AppName>
      <ButtonWrapper>
        <ButtonEl
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <ButtonText>Continue</ButtonText>
        </ButtonEl>
      </ButtonWrapper>
    </Container>
  );
};

export default InitScreen;
