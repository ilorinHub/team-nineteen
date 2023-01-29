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
import { riders } from "../../data";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
const Container = styled(CContainer)``;
const InfoText = styled(AppText)``;
// const Container = styled.View``

const RenderMap = () => {
  const {
    color: { phalanxYellow },
  } = useTheme();
  const mapRef = useRef<MapView>(null);
  const { ride } = phalanxEntity.use();

  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [ride]);

  console.log({ ride: JSON.stringify(ride, null, 2) });

  return (
    <Container>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: ride.origin?.location?.lat || 8.490495,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        zoomControlEnabled
        zoomEnabled
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
            description={ride?.origin?.description}
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
            description={ride?.destination?.description}
            coordinate={{
              latitude: ride?.destination?.location?.lat || 0,
              longitude: ride?.destination?.location?.lng || 0,
            }}
            identifier="destination"
          />
        )}
        {riders.map((rider, riderIndex) => (
          <Marker
            key={riderIndex}
            title={rider.type}
            coordinate={{
              latitude: rider.location.lat,
              longitude: rider.location.lng,
            }}
          >
            {rider.type === "car" && (
              <FontAwesome5 name="car" size={32} color={phalanxYellow} />
            )}
            {rider.type === "bus" && (
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color={phalanxYellow}
              />
            )}
            {rider.type === "keke" && (
              <FontAwesome5 name="caravan" size={24} color={phalanxYellow} />
            )}
          </Marker>
        ))}
      </MapView>
    </Container>
  );
};

export default RenderMap;
