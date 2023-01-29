import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  AppText,
  FlexRow,
  FlexRowJustifyBetween,
} from "../../theme/style.component";
import { Fragment, useEffect, useState } from "react";

import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { phalanxEntity, setRide } from "../../entities/phalanx.entity";
import { StackNavigationProp } from "@react-navigation/stack";
import { RideParams } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import TransHistory from "../../components/molecules/TransHistory";
import Feedback from "../../components/organisms/Feedback";
import ModalEl from "../../components/molecules/ModalEl";

const Container = styled.View`
  flex-grow: 1;
  padding-horizontal: ${wp(5.13)}px;
  padding-vertical: ${hp(3)}px;
`;
const InfoText = styled(AppText)`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const TextWrapper = styled(FlexRowJustifyBetween)``;
const Time = styled(AppText)``;

const ActionWrapper = styled.Pressable`
  background-color: ${(props) => props.theme.color.phalanxYellow};
  border-radius: 100px;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;
const SpacerWidth = styled.View`
  width: ${wp(6)}px;
`;
const DriverDetails = styled.View`
  margin-vertical: ${hp(5)}px;
`;
const ActionsWrapper = styled(FlexRow)`
  /* margin-vertical: ${hp(5)}px; */
  justify-content: center;
`;
// const Container = styled.View``;

type TConnectRider = StackNavigationProp<RideParams, "connect rider">;
const ConnectingRider = () => {
  const [isConnecting, setIsConnecting] = useState(true);
  const [isArriving, setIsArriving] = useState(false);
  const [feedBack, setFeedBack] = useState(false);
  const { travelInfo } = phalanxEntity.use();
  const navigation = useNavigation<TConnectRider>();
  const TextToShow = isConnecting
    ? "Connecting Rider..."
    : isArriving
    ? "Driver is Arriving..."
    : "Trip to Destination";

  const TextToShow2 = isConnecting
    ? "please wait"
    : isArriving
    ? "5 mins"
    : travelInfo?.duration.text;

  useEffect(() => {
    setTimeout(() => {
      setIsConnecting(false);
      setIsArriving(true);
    }, 4000);
    setTimeout(() => {
      setIsArriving(false);
    }, 9000);
  }, []);

  useEffect(() => {
    if (!isConnecting && !isArriving) {
      setTimeout(() => {
        setFeedBack(true);
      }, 3000);
    }
  }, [isConnecting, isArriving]);

  return (
    <Container>
      <TextWrapper>
        <InfoText>{TextToShow}</InfoText>
        <Time>{TextToShow2}</Time>
      </TextWrapper>

      {!isConnecting && (
        <Fragment>
          <DriverDetails>
            <TransHistory
              rating
              avatarUrl="https://gravatar.com/avatar/c899bf390f109b772c4014257ffdc984?s=400&d=robohash&r=x"
              name="Daniel Austin"
              amount="4.8"
              trans="HSW 4736"
              det="Mercedes-Benz C300"
            />
          </DriverDetails>
          <ActionsWrapper>
            {isArriving && (
              <>
                <ActionWrapper
                  onPress={() => {
                    setRide(null, "destination");
                    navigation.navigate("search");
                  }}
                >
                  <MaterialIcons name="cancel" size={32} color="black" />
                </ActionWrapper>
                <SpacerWidth />
              </>
            )}
            <ActionWrapper onPress={() => {}}>
              <AntDesign name="message1" size={32} color="black" />
            </ActionWrapper>
            <SpacerWidth />
            <ActionWrapper onPress={() => {}}>
              <Ionicons name="call" size={32} color="black" />
            </ActionWrapper>
          </ActionsWrapper>
          <ModalEl transparent visible={feedBack}>
            <Feedback cancel={() => setFeedBack(false)} />
          </ModalEl>
        </Fragment>
      )}
    </Container>
  );
};

export default ConnectingRider;
