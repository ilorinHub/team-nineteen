import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CContainer } from "./theme/style.component";
import { RootStackParamsList } from "./utils/types";
import styled from "styled-components/native";
import InitScreen from "./screens/InitScreen";

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
      </Navigator>
    </Container>
  );
};

export default AppRoutes;
