import styled, { css, useTheme } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText, CContainer } from "../../theme/style.component";
import MapView, { Circle, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useEffect, useRef } from "react";
import { phalanxEntity } from "../../entities/phalanx.entity";

const Container = styled(CContainer)``;
const InfoText = styled(AppText)``;
// const Container = styled.View``

const RenderMap = () => {
  const {
    color: { phalanxYellow },
  } = useTheme();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, []);

  const { ride } = phalanxEntity.use();

  return (
    <Container>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: ride.origin?.location?.lat || 8.490495,
          longitude: ride.origin?.location?.lng || 4.541737,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
        zoomControlEnabled
        style={{ width: "100%", height: "100%" }}
      >
        {ride.origin && ride.destination && (
          <MapViewDirections
            origin={ride.origin?.description}
            destination={ride.destination?.description}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor={phalanxYellow}
            lineDashPattern={[0]}
          />
        )}
        {ride?.origin && (
          <Marker
            title="Origin"
            description="a small bus"
            coordinate={{
              latitude: ride.origin?.location?.lat || 8.490495,
              longitude: ride.origin?.location?.lng || 4.541737,
            }}
            identifier="origin"
          />
        )}
        {ride?.destination && (
          <Marker
            title="bus"
            description="a small bus"
            coordinate={{
              latitude: ride?.destination?.location?.lat || 8.491811,
              longitude: ride?.destination?.location?.lng || 4.548737,
            }}
            identifier="destination"
          />
        )}
      </MapView>
    </Container>
  );
};

export default RenderMap;
