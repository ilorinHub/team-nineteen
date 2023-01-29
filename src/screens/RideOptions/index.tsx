import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CContainer } from "../../theme/style.component";
import styled from "styled-components/native";
import { RideParams } from "../../utils/types";
import Search from "./Search";
import RideDetails from "./RideDetails";
import ConnectingRider from "./ConnectingRider";

//screens

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

const Stack = createStackNavigator<RideParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName="search" screenOptions={{ headerShown: false }}>
      <Screen name="search" component={Search} />
      <Screen name="ride details" component={RideDetails} />
      <Screen name="connect rider" component={ConnectingRider} />
    </Navigator>
  );
};

export default AppRoutes;
