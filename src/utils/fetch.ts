// export const handleFetchError = (err: any, key?: any) => {
//   if (err.response?.data) {
//     console.log(err.response.data);
//     // if (typeof err.response.data.message === "string")
//     //   toastError(err.response.data.message);
//     // else {
//     toastError(
//       err.response.data[key] ?? "Error making Request, Please try again!!"
//     );
//     // }
//     // if (err.response?.status === 401) {
//     //   clearAuth();
//     // }
//   }
// };

import { toastError } from "./common";

export const handleFetchError = (err: any) => {
  const errorCode = err.code;
  const errorMessage = err.message;
  if (errorMessage) {
    const errorToShow = errorMessage.split(":")[1];
    console.log({ errorMessage, errorCode, errorToShow });
    toastError(errorToShow);
  }
};
