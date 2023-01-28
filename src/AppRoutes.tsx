import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CContainer } from "./theme/style.component";
import { RootStackParamsList } from "./utils/types";
import styled from "styled-components/native";
import InitScreen from "./screens/InitScreen";
import Login from "./screens/AuthScreens/Login";
import Signup from "./screens/AuthScreens/Signup";
import GetRide from "./screens/GetRide";

//screens

const Container = styled(CContainer)`
  background-color: #fff;
`;

const Stack = createStackNavigator<RootStackParamsList>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Container>
      <Navigator initialRouteName="Init" screenOptions={{ headerShown: false }}>
        <Screen name="Init" component={InitScreen} />
        <Screen name="login" component={Login} />
        <Screen name="signup" component={Signup} />
        <Screen name="get ride" component={GetRide} />
      </Navigator>
    </Container>
  );
};

export default AppRoutes;
