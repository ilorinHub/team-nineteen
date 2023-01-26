///Toast Starts ///

import Toast, { ToastShowParams } from "react-native-toast-message";

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
