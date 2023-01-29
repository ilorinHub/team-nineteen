import styled, { css, useTheme } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText } from "../../theme/style.component";
import { vehicles } from "../../data";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View``;
const InfoText = styled(AppText)``;
const VehicleWrapper = styled.Pressable<{ active: boolean }>`
  padding-vertical: ${hp(1.7)}px;
  padding-horizontal: ${wp(3)}px;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      background-color: #fffaed;
    `}
`;

const IconWrapper = styled.View``;
const VehicleName = styled(AppText)`
  flex-grow: 1;
  margin-horizontal: ${wp(4)}px;
  font-size: 20px;
  font-weight: 700;
`;
const Amount = styled(AppText)`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.color.phalanxYellow};
`;
// const Container = styled.View``

const RideView = () => {
  const [active, setActive] = useState(0);
  const {
    color: { phalanxYellow },
  } = useTheme();
  return (
    <Container>
      {vehicles.map((vehicle, vehicleIndex) => {
        const iconName =
          vehicle.type === "car"
            ? "car-side"
            : vehicle.type === "bus"
            ? "bus-alt"
            : "caravan";
        return (
          <VehicleWrapper
            active={vehicleIndex === active}
            key={vehicleIndex}
            onPress={() => {
              if (active !== vehicleIndex) {
                setActive(vehicleIndex);
              }
            }}
          >
            <IconWrapper>
              <FontAwesome5 name={iconName} size={32} color={phalanxYellow} />
            </IconWrapper>
            <VehicleName>{vehicle.vehicleName}</VehicleName>
            <Amount>{vehicle.amount}</Amount>
          </VehicleWrapper>
        );
      })}
    </Container>
  );
};

export default RideView;
