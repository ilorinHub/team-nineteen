import React, { Fragment, useState } from "react";
import * as WebBrowser from "expo-web-browser";

import {
  BarCode,
  Container,
  HeaderWrapper,
  MainContent,
  ProfileOptions,
  ProfileOptionWrapper,
  ProfileReferralWrapper,
  ScreenName,
  UserDetailsWrapper,
  Version,
} from "./Profile.style";
import { IProfileOptions } from ".";
import Scrollable from "../../components/atoms/icons/Scrollable";
import { profileData } from "../../data";
import ProfileOptionCard from "../../components/molecules/ProfileOptionCard";
import UserDetails from "../../components/molecules/UserDetails";
import HeaderWithBackArrow from "../../components/molecules/HeaderWithBack";
import { clearAuth } from "../../entities/auth.entity";

const ProfileScreen = ({
  setProfileOption,
  goBack,
}: {
  setProfileOption: (option: IProfileOptions) => void;
  goBack: Function;
}) => {
  const [isLoggingOut, setisLoggingOut] = useState(false);
  const [showReferralScreen, setShowReferralScreen] = useState(false);

  return (
    <Fragment>
      <Container>
        <HeaderWrapper>
          <HeaderWithBackArrow
            headerText="Profile"
            goBack={() => {
              goBack();
            }}
          />
        </HeaderWrapper>
        <UserDetailsWrapper>
          <UserDetails onEditPress={() => setProfileOption("editProfile")} />
        </UserDetailsWrapper>
        <MainContent>
          <Scrollable>
            <ProfileOptions>
              {profileData.map((item: any, itemIndex: number) => (
                <ProfileOptionWrapper
                  onPress={() => {
                    if (item.title === "Security") {
                      // setProfileOption("Security");
                    } else if (item.title === "Sign Out") {
                      setisLoggingOut(true);
                      clearAuth();
                    } else if (item.title === "Terms of Services") {
                      // WebBrowser.openBrowserAsync("https://phalanx.com/terms/");
                    } else if (item.title === "Customer Support") {
                      // WebBrowser.openBrowserAsync(
                      //   "https://phalanx.com/contact/"
                      // );
                    }
                  }}
                  key={itemIndex}
                >
                  <ProfileOptionCard
                    title={item.title}
                    icon={item.title}
                    borderTop={itemIndex !== 0}
                  />
                </ProfileOptionWrapper>
              ))}
            </ProfileOptions>
          </Scrollable>
        </MainContent>
      </Container>
      {/* <LogoutConfirmationBox
        show={isLoggingOut}
        closeModal={() => setisLoggingOut(false)}
      /> */}
    </Fragment>
  );
};

export default ProfileScreen;
