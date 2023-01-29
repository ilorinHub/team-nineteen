import React, { Fragment, useState } from "react";
import EditProfile from "./EditProfile";
import { Container } from "./Profile.style";
import ProfileScreen from "./ProfileScreen";
import SuccessScreen from "./SuccessScreen";
import Security from "./Security";
import ModalEl from "../../components/molecules/ModalEl";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../utils/types";

export type IProfileOptions =
  | "editProfile"
  | "Security"
  | "shareApp"
  | "customerSupport"
  | "TOC"
  | "signOut"
  | null;
type ISuccess = any;

export interface ISuccessProps {
  type: ISuccess;
  show: boolean;
  setType?: Function;
}

type TProfileNav = StackNavigationProp<RootStackParamsList, "profile">;
const Index = () => {
  const [profileOption, setProfileOption] = useState<IProfileOptions>(null);
  const [isSuccess, setIsSuccess] = useState<ISuccessProps>({
    type: "",
    show: false,
    setType: () => {},
  });

  const setOptionToNull = () => {
    setProfileOption(null);
  };
  const navigation = useNavigation<TProfileNav>();
  return (
    <Fragment>
      <ProfileScreen
        setProfileOption={setProfileOption}
        goBack={() => navigation.goBack()}
      />
      <ModalEl visible={profileOption !== null}>
        {profileOption === "editProfile" && (
          <EditProfile
            setOptionToNull={setOptionToNull}
            setSuccess={setIsSuccess}
          />
        )}
        {profileOption === "Security" && (
          <Security
            setOptionToNull={setOptionToNull}
            setSuccess={setIsSuccess}
          />
        )}

        <SuccessScreen
          {...isSuccess}
          closeSuccessScreen={() => setIsSuccess({ type: "", show: false })}
          setOptionToNull={setOptionToNull}
        />
      </ModalEl>
    </Fragment>
  );
};

export default Index;
