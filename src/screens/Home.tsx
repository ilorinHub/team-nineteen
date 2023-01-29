import styled, { css, useTheme } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AppText, CContainer, FlexRow } from "../theme/style.component";
import UserAvatar from "../components/molecules/UserAvatar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
import HomeOptionCard from "../components/molecules/HomeOptionCard";
import { homeOptions } from "../data";

const Container = styled(CContainer)`
  padding-top: ${hp(11.19)}px;
  padding-horizontal: ${hp(2.13)}px;
`;
const InfoText = styled(AppText)``;
const UserInfoWrapper = styled(FlexRow)`
  margin-bottom: ${hp(3)}px;
`;
const TextWrapper = styled.View`
  margin-left: ${wp(4)}px;
`;
const PackageName = styled(AppText)``;
const FullName = styled(AppText)`
  font-size: 18px;
  font-weight: 700;
`;
const Main = styled.View`
  flex-grow: 1;
`;
const Wrapper = styled.View``;
const SpacerWidth = styled.View`
  width: ${wp(5)}px;
`;
const SpacerHeight = styled.View`
  height: ${hp(4)}px;
`;

// const Container = styled.View``

type THomeNav = StackNavigationProp<RootStackParamsList, "home">;
const Home = () => {
  const isPackage = true;
  const navigation = useNavigation<THomeNav>();
  const {
    color: { phalanxYellow },
  } = useTheme();
  return (
    <Container>
      <UserInfoWrapper>
        <UserAvatar
          width={60}
          height={60}
          text="AM"
          onAvatarPress={() => {
            navigation.navigate("profile");
          }}
        />
        <TextWrapper>
          <FullName>Asiyanbi Mubashir</FullName>
          {isPackage ? (
            <PackageName>Package: Silver</PackageName>
          ) : (
            <PackageName
              onPress={() => {
                navigation.navigate("packages");
              }}
            ></PackageName>
          )}
        </TextWrapper>
      </UserInfoWrapper>
      <Main>
        <FlexRow>
          <HomeOptionCard
            {...homeOptions[0]}
            onPress={() => {
              navigation.navigate("get ride");
            }}
            bg="#BBE7FE"
          />
          <SpacerWidth />
          <HomeOptionCard
            {...homeOptions[1]}
            onPress={() => {
              navigation.navigate("wallet");
            }}
            bg="#D3B5E5"
          />
        </FlexRow>
        <SpacerHeight />
        <FlexRow>
          <HomeOptionCard
            {...homeOptions[2]}
            onPress={() => {
              navigation.navigate("packages");
            }}
            bg="#EFF1DB"
          />
          <SpacerWidth />
          <HomeOptionCard
            {...homeOptions[3]}
            onPress={() => {
              navigation.navigate("bookings");
            }}
            bg="#FFD4DB"
          />
        </FlexRow>
      </Main>
    </Container>
  );
};

export default Home;
