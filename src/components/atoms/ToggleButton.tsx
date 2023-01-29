import { Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";

const Container = styled.View<{ checked: boolean; bg?: string }>`
  background: #f6f5fa;
border-radius: 15px
  width: ${wp("12.32%")}px;
  height: ${hp("3.34%")}px;
  padding-vertical:${hp("0.22%")}px;
  padding-horizontal:${wp("0.48%")}px;

  ${(props) =>
    props.checked &&
    css`
      background-color: ${props.bg ?? props.theme.color.phalanxYellow};
    `}
`;

const CircleSlider = styled.View<{ checked: boolean }>`
  position: absolute;
  left: 0;
  width: 26px
  height: 26px;
  background: #fff;
  box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 15px
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.checked &&
    css`
      left: 26px;
    `}
`;

const ToggleButton = ({
  checked = false,
  onToggle = () => {},
  bg,
}: {
  checked?: boolean;
  onToggle?: () => void;
  bg?: string;
}) => {
  return (
    <Pressable onPress={onToggle}>
      <Container bg={bg} checked={checked}>
        <CircleSlider checked={checked} />
      </Container>
    </Pressable>
  );
};

export default ToggleButton;
