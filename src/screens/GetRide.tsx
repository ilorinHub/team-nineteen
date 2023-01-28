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

const GetRide = () => {
  const { searchFullHeight } = phalanxEntity.use();
  return (
    <Fragment>
      <Container>
        <MapWrapper>
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
