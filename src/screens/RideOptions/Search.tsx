import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { AppText, FlexRow } from "../../theme/style.component";
import InputField from "../../components/molecules/InputField";
import CancelButton from "../../components/atoms/icons/CancelButton";
import { useState } from "react";
import { phalanxEntity, setSearchHeight } from "../../entities/phalanx.entity";

const Container = styled.View<{ full?: boolean }>`
  padding-horizontal: ${wp(5.13)}px;
  padding-vertical: ${hp(4)}px;
  flex-grow: 1;
  background-color: rgba(128, 128, 128, 0.02);
  width: 100%;
`;
const InfoText = styled(AppText)``;

const SpacerHeight = styled.View`
  height: ${hp(3.5)}px;
`;

const HeaderWrapper = styled(FlexRow)`
  margin-bottom: ${hp(2)}px;
`;
const HeaderText = styled(AppText)``;
const CancelWrapper = styled.Pressable`
  margin-right: ${wp(4)}px;
`;
// const Container = styled.View``

const defaultForm = {
  origin: "",
  destination: "",
};

const Search = () => {
  const [form, setForm] = useState(defaultForm);
  const { searchFullHeight: full } = phalanxEntity.use();
  const updateField = (field: keyof typeof defaultForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  return (
    <Container full={full}>
      {full && <SpacerHeight />}
      <HeaderWrapper>
        {full && (
          <CancelWrapper
            onPress={() => {
              setSearchHeight(false);
            }}
          >
            <CancelButton />
          </CancelWrapper>
        )}
        <HeaderText>Your Route</HeaderText>
      </HeaderWrapper>
      <InputField
        placeholder="pickup Location"
        label="pickup Location"
        onFocus={() => {
          if (!full) {
            setSearchHeight(true);
          }
        }}
        value={form.origin}
        onChangeText={(text) => {
          updateField("origin", text);
        }}
      />
      <SpacerHeight />
      <InputField
        placeholder="Destination"
        label="Destination"
        onFocus={() => {
          if (!full) {
            setSearchHeight(true);
          }
        }}
        value={form.destination}
        onChangeText={(text) => {
          updateField("destination", text);
        }}
      />
    </Container>
  );
};

export default Search;
