import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet, TextInput } from "react-native";
import { AppText, FlexRow } from "../../theme/style.component";
import InputField from "../../components/molecules/InputField";
import CancelButton from "../../components/atoms/icons/CancelButton";
import { useCallback, useEffect, useState } from "react";
import {
  phalanxEntity,
  setRide,
  setSearchHeight,
  TlatLong,
  TRide,
} from "../../entities/phalanx.entity";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { StackNavigationProp } from "@react-navigation/stack";
import { RideParams } from "../../utils/types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getTravelTime } from "../../utils/common";

const Container = styled.View<{ full?: boolean }>`
  padding-horizontal: ${wp(5.13)}px;
  padding-vertical: ${hp(4)}px;
  flex-grow: 1;
  background-color: rgba(128, 128, 128, 0.02);
  width: 100%;
`;
const InfoText = styled(AppText)``;

const SpacerHeight = styled.View`
  height: ${hp(2.5)}px;
`;

const HeaderWrapper = styled(FlexRow)`
  margin-bottom: ${hp(2)}px;
`;
const HeaderText = styled(AppText)``;
const CancelWrapper = styled.Pressable`
  margin-right: ${wp(4)}px;
`;
const TextField = styled.TextInput`
  background-color: #fafafa;
  border-radius: 8px;
  justify-content: center;
  font-size: 18px;
  height: 63px;
  padding-horizontal: 10px;
`;
// const Container = styled.View``

const defaultForm = {
  origin: "",
  destination: "",
};

type TSearchNav = StackNavigationProp<RideParams, "search">;

const Search = () => {
  const [form, setForm] = useState(defaultForm);
  const { searchFullHeight: full, ride } = phalanxEntity.use();
  const updateField = (field: keyof typeof defaultForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const [_data, setData] = useState<{
    origin: { location: TlatLong; description: string } | null;
    destination: { location: TlatLong; description: string } | null;
  }>({
    origin: null,
    destination: null,
  });

  const navigation = useNavigation<TSearchNav>();

  const handleSearchOptionPress = (
    type: "origin" | "destination",
    ride: { location: TlatLong; description: string } | null
  ) => {
    const dataToUse = {
      ..._data,
      [type]: ride,
    };
    setRide(dataToUse);
    setSearchHeight(false);
    navigation.navigate("ride details");
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

      {!full ? (
        <>
          <TextField
            onFocus={() => {
              if (!full) {
                setSearchHeight(true);
              }
            }}
            placeholder="Pickup Location"
          />
          <SpacerHeight />
          <TextField
            onFocus={() => {
              if (!full) {
                setSearchHeight(true);
              }
            }}
            placeholder="Destination"
          />
        </>
      ) : (
        <>
          <GooglePlacesAutocomplete
            placeholder="Pickup Location"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              const rideData = {
                location: details?.geometry.location,
                description: data.description,
              };
              if (_data?.destination) {
                handleSearchOptionPress("origin", rideData);
              } else {
                setData((currentData) => ({
                  ...currentData,
                  origin: rideData,
                }));
              }
            }}
          />
          <SpacerHeight />
          <GooglePlacesAutocomplete
            placeholder="Destination"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              const rideData = {
                location: details?.geometry.location,
                description: data.description,
              };
              if (_data?.origin) {
                handleSearchOptionPress("destination", rideData);
              } else {
                setData((currentData) => ({
                  ...currentData,
                  destination: rideData,
                }));
              }
            }}
          />
        </>
      )}

      {/* <InputField
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
      /> */}
    </Container>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    // paddingTop: 20,
    flex: 0,
    borderRadius: 8,
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#fafafa",
    borderRadius: 0,
    fontSize: 18,
    height: 60,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
});

export default Search;
