import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText, ButtonText } from "../../theme/style.component";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { StyleSheet, TextInput } from "react-native";
import { TlatLong } from "../../entities/phalanx.entity";
import ButtonEl from "../molecules/ButtonEl";
import CancelIcon from "../atoms/icons/CancelIcon";

const Container = styled.View`
  flex-grow: 1;
  /* justify-content: center; */
  padding-horizontal: ${wp(5)}px;
  padding-top: ${hp(10)}px;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: #fff;
`;
const MainContent = styled.View`
  background-color: #fff;
  padding-vertical: ${hp(2.68)}px;
  padding-horizontal: ${wp(4)}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const InfoText = styled(AppText)``;
const TextField = styled.TextInput`
  background-color: #fafafa;
  border-radius: 8px;
  justify-content: center;
  font-size: 18px;
  height: 63px;
  padding-horizontal: 10px;
`;
// const Container = styled.View``
const SpacerHeight = styled.View`
  height: ${hp(2)}px;
`;

const defaultForm = {
  origin: "",
  destination: "",
};

const BookNow = ({ goBack }: { goBack: Function }) => {
  const [form, setForm] = useState(defaultForm);
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
  return (
    <Container>
      <Pressable
        onPress={() => {
          goBack();
        }}
      >
        <CancelIcon />
      </Pressable>
      <SpacerHeight />
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

          setData((currentData) => ({
            ...currentData,
            origin: rideData,
          }));
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

          setData((currentData) => ({
            ...currentData,
            destination: rideData,
          }));
        }}
      />
      <SpacerHeight />
      <TextField placeholder="Pickup Time" />
      <SpacerHeight />
      <ButtonEl>
        <ButtonText>Book Now</ButtonText>
      </ButtonEl>
    </Container>
  );
};

export default BookNow;

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
