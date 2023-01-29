import React, { Fragment } from "react";
import Wallet from "./screens/Wallet";
import TopUp from "./screens/TopUp";
import Bookings from "./screens/Bookings";
import { CContainer } from "./theme/style.component";
import { RootStackParamsList } from "./utils/types";
import styled from "styled-components/native";
import InitScreen from "./screens/InitScreen";
import Login from "./screens/AuthScreens/Login";
import Signup from "./screens/AuthScreens/Signup";
import GetRide from "./screens/GetRide";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Packages from "./screens/Packages";
import { useAuth } from "./entities/auth.entity";

//screens

const Container = styled(CContainer)`
  background-color: #fff;
`;

const Stack = createStackNavigator<RootStackParamsList>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navigator
        initialRouteName={isLoggedIn ? "home" : "Init"}
        screenOptions={{ headerShown: false }}
      >
        {!isLoggedIn ? (
          <Fragment>
            <Screen name="login" component={Login} />
            <Screen name="Init" component={InitScreen} />
            <Screen name="signup" component={Signup} />
          </Fragment>
        ) : (
          <Fragment>
            <Screen name="home" component={Home} />
            <Screen name="wallet" component={Wallet} />
            <Screen name="topup" component={TopUp} />
            <Screen name="bookings" component={Bookings} />
            <Screen name="get ride" component={GetRide} />
            <Screen name="profile" component={Profile} />
            <Screen name="packages" component={Packages} />
          </Fragment>
        )}
      </Navigator>
    </Container>
  );
};

export default AppRoutes;
