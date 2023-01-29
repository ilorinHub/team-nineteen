import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  AppText,
  ButtonText,
  FlexRow,
  FlexRowJustifyBetween,
} from "../../theme/style.component";
import ButtonEl from "../../components/molecules/ButtonEl";
import Scrollable from "../../components/atoms/icons/Scrollable";
import RideView from "../../components/molecules/RideView";
import { useEffect } from "react";
import { getTravelTime } from "../../utils/common";
import { phalanxEntity } from "../../entities/phalanx.entity";
import { StackNavigationProp } from "@react-navigation/stack";
import { RideParams } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-grow: 1;
  padding-vertical: ${hp(3)}px;
`;
const InfoText = styled(AppText)``;
const InfoWrapper = styled(FlexRowJustifyBetween)`
  padding-horizontal: ${wp(5.13)}px;
`;
const Wrapper = styled.View`
  align-items: center;
`;
const Title = styled(AppText)`
  font-weight: 600;
`;
const Content = styled(AppText)``;
const Main = styled.View`
  flex-grow: 1;
  margin-vertical: ${hp(2.5)}px;
`;
const ButtonWrapper = styled.View`
  padding-horizontal: ${wp(5.13)}px;
`;

type TRideDetailsNav = StackNavigationProp<RideParams, "ride details">;

const RideDetails = () => {
  const { travelInfo } = phalanxEntity.use();

  const navigation = useNavigation<TRideDetailsNav>();

  useEffect(() => {
    const { ride } = phalanxEntity.get();
    const data = {
      originDescription: ride?.origin?.description,
      destinationDescription: ride?.destination?.description,
    };
    getTravelTime(data);
  }, []);
  return (
    <Container>
      <InfoWrapper>
        <Wrapper>
          <Title>Distance</Title>
          <Content>
            {travelInfo?.distance ? travelInfo?.distance.text : "--"}
          </Content>
        </Wrapper>
        <Wrapper>
          <Title>Arrival Time</Title>
          <Content>
            {travelInfo?.duration ? travelInfo?.duration.text : "--"}
          </Content>
        </Wrapper>
      </InfoWrapper>
      <Main>
        <Scrollable>
          <RideView />
        </Scrollable>
      </Main>
      <ButtonWrapper>
        <ButtonEl
          onPress={() => {
            navigation.navigate("connect rider");
          }}
        >
          <ButtonText>Book A Ride</ButtonText>
        </ButtonEl>
      </ButtonWrapper>
    </Container>
  );
};

export default RideDetails;
