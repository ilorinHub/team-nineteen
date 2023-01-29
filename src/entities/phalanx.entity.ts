import { entity } from "simpler-state";
import { Point } from "react-native-google-places-autocomplete";

export type TlatLong = Point | undefined;

export type TRide = {
  destination: { location: TlatLong; description: string } | null;
  origin: { location: TlatLong; description: string } | null;
};

type DistanceMatrix = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
};

type TPhalanx = {
  searchFullHeight: boolean;
  ride: TRide;
  travelInfo: DistanceMatrix | null;
};

const defaultState: TPhalanx = {
  searchFullHeight: false,
  ride: {
    destination: null,
    origin: { location: { lat: 8.490495, lng: 4.541737 }, description: "" },
  },
  travelInfo: null,
};

export const phalanxEntity = entity(defaultState);

export const setSearchHeight = (state: boolean) =>
  phalanxEntity.set((currentData: any) => ({
    ...currentData,
    searchFullHeight: state,
  }));

export const setRide = (
  ride: TRide | { location: TlatLong; description: string } | null,
  type?: "origin" | "destination"
) => {
  if (type) {
    return phalanxEntity.set((currentData: any) => ({
      ...currentData,
      ride: {
        ...currentData.ride,
        [type]: ride,
      },
    }));
  }
  return phalanxEntity.set((currentData: any) => ({
    ...currentData,
    ride: ride,
  }));
};

export const setTravelInfo = (data: DistanceMatrix | null) =>
  phalanxEntity.set((currentData: any) => ({
    ...currentData,
    travelInfo: data,
  }));
