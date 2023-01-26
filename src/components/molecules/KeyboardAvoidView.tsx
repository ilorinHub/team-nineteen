import { View, Text, Platform } from "react-native";
import React, { ReactElement } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidView = ({
  children,
  extraHeight,
}: {
  children: ReactElement;
  extraHeight?: number;
}) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={Platform.OS === "ios" ? 0 : 70}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
      extraHeight={extraHeight ?? 100}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidView;
