import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Text, View } from "./ConfirmationField.style";

const CELL_COUNT = 6;

const OTPFields = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (val: string) => void;
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={{ marginTop: hp(2.23) }}
      keyboardType="numeric"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          focused={isFocused}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
        >
          <Text>{symbol || (isFocused ? <Cursor /> : null)}</Text>
        </View>
      )}
    />
  );
};

export default OTPFields;
