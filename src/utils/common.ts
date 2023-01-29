///Toast Starts ///

import { GOOGLE_MAPS_API_KEY } from "@env";
import axios from "axios";
import Toast, { ToastShowParams } from "react-native-toast-message";
import { setTravelInfo } from "../entities/phalanx.entity";

export const toast = ({
  type = "toastWidget",

  position = "top",

  visibilityTime = 2000,

  autoHide = true,

  topOffset = 35,

  bottomOffset = 0,
  props,
  ...params
}: ToastShowParams) =>
  Toast.show({
    type,

    position,

    visibilityTime,

    topOffset,

    bottomOffset,
    props,

    ...params,
  });

export const toastError = (message: string) =>
  toast({
    props: { message, messageType: "error" },
  });

export const toastSuccess = (message: string) =>
  toast({
    props: { message, messageType: "success" },
  });

///Toast End///

export const getTravelTime = async ({
  originDescription,
  destinationDescription,
}: {
  originDescription: any;
  destinationDescription: any;
}) => {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originDescription}&destinations=${destinationDescription}&key=${GOOGLE_MAPS_API_KEY}`;
  const { data } = await axios(url);
  // dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
  setTravelInfo(data.rows[0].elements[0]);
};
