import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText, CContainer } from "../theme/style.component";
import RenderMap from "../components/molecules/RenderMap";
import RideOptions from "./RideOptions";
import { phalanxEntity } from "../entities/phalanx.entity";
import { Fragment } from "react";
import AbsoluteArrow from "../components/atoms/AbsoluteArrow";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../utils/types";
import { useNavigation } from "@react-navigation/native";

const Container = styled(CContainer)``;
const InfoText = styled(AppText)``;

// const Container = styled.View``
const MapWrapper = styled.View`
  flex: 1;
`;
const OptionsWrapper = styled.View<{ full?: boolean }>`
  height: 40%;

  ${(props) =>
    props.full &&
    css`
      height: 100%;
    `}
`;
type TRideNav = StackNavigationProp<RootStackParamsList, "get ride">;

const GetRide = () => {
  const { searchFullHeight } = phalanxEntity.use();
  const navigation = useNavigation<TRideNav>();
  return (
    <Fragment>
      <Container>
        <MapWrapper>
          <AbsoluteArrow
            goBack={() => {
              navigation.goBack();
            }}
          />
          <RenderMap />
        </MapWrapper>
        <OptionsWrapper full={searchFullHeight}>
          <RideOptions />
        </OptionsWrapper>
      </Container>
    </Fragment>
  );
};

export default GetRide;
