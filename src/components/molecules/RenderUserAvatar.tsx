import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
// import { AvatarName } from "../../utils/types";

//icons

// interface IRoute {
//   avatarName?: AvatarName;
// }

const RenderUserAvatar = ({ avatarName }: { avatarName: any }) => {
  let result = <View />;

  switch (avatarName) {
    case "avatar0":
      break;
    default:
      break;
  }
  return result;
};

export default RenderUserAvatar;
