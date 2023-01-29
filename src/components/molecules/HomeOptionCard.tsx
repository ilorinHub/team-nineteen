import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  FontAwesome5,
  FontAwesome,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

import { AppText } from "../../theme/style.component";

const Container = styled.Pressable<{ bg?: string }>`
  width: 45%;
  height: ${hp(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fffaed;

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `}
`;
const InfoText = styled(AppText)`
  margin-top: ${hp(1)}px;
  font-size: 20px;
  font-weight: 600;
`;
const ContentBox = styled.View`
  align-items: center;
`;
const IconWrapper = styled.Pressable`
  background-color: #fffaed;
  border-radius: 100px;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;
// const Container = styled.View``
// const Container = styled.View``

const HomeOptionCard = ({
  onPress,
  title,
  name,
  bg,
}: {
  onPress?: Function;
  title: string;
  name: string;
  bg?: string;
}) => {
  return (
    <Container
      onPress={() => {
        onPress?.();
      }}
      bg={bg}
    >
      <ContentBox>
        <IconWrapper onPress={() => {}}>
          {name === "get ride" && (
            <FontAwesome5 name="car" size={40} color="black" />
          )}
          {name === "packages" && (
            <Fontisto name="shopping-package" size={40} color="black" />
          )}
          {name === "bookings" && (
            <FontAwesome name="book" size={40} color="black" />
          )}
          {name === "wallet" && (
            <Entypo name="wallet" size={40} color="black" />
          )}
        </IconWrapper>
        <InfoText>{title}</InfoText>
      </ContentBox>
    </Container>
  );
};

export default HomeOptionCard;
