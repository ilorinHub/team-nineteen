import React, { ReactElement } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { appThemes } from "../../theme/appTheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../atoms/ToastWidget";

const Wrapper = styled.KeyboardAvoidingView`
  flex-grow: 1;
`;

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    myOwnColor: "#BADA55",
    primary: "transparent",
  },
};

const ThemeManager = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={appThemes}>
      <SafeAreaProvider>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <StatusBar style="dark" />
            <Wrapper
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              enabled
            >
              {children}
            </Wrapper>
          </PaperProvider>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default ThemeManager;
