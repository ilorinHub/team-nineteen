import React, { Fragment } from 'react';

import styled, { css } from 'styled-components/native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CameraIcon from '../atoms/icons/CameraIcon';
import RenderUserAvatar from './RenderUserAvatar';
import { Textt } from '../atoms/Typography';

const Wrapper = styled.View<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 100px;
`;

const AvatarContainer = styled.View<{
  width: number;
  height: number;
  border?: boolean;
  bg: string;
  borderColor?: string;
  borderWidth?: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 100px;
  background-color: ${(props) => props.bg};
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border: 1.77347px solid transparent;
  overflow: hidden;

  ${(props) =>
    props.border &&
    css`
      border: 1.77347px solid #fff;
    `}

  ${(props) =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}

    ${(props) =>
    props.borderWidth &&
    css`
      border-width: ${props.borderWidth}px;
    `}
`;
const Text = styled.Text`
  font-weight: 900;
  font-size: 11.8951px;
  color: ${(props) => props.theme.color.fleetBlack};
`;
const TouchableEl = styled.Pressable``;

const Touchable = styled.Pressable`
  position: absolute;
  bottom: 0;
  right: -9.5px;
  z-index: 5;
`;
const Img = styled.Image<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 100px;
`;

const UserAvatar = ({
  avatarName,
  onAvatarPress = () => {},
  onEditPress = () => {},
  editable = false,
  text = '',
  bg = '#e2e6fd',
  borderColor,
  borderWidth,
  border = false,
  width = 50,
  height = 50,
  type = 'avatar',
  avatarUrl,
}: {
  avatarName?: any;
  bg?: string;
  border?: boolean;
  text?: string;
  onAvatarPress?: () => void;
  onEditPress?: () => void;
  editable?: boolean;
  width?: number;
  height?: number;
  type?: 'avatar' | 'others';
  avatarUrl?: string;
  borderColor?: string;
  borderWidth?: number;
}) => {
  //   const { user } = useAuth();
  const user: any = {};

  const isAvatar = avatarUrl
    ? avatarUrl
    : user?.avatar !== 'avatar.png' && user?.avatar !== '';

  const url = avatarUrl ? avatarUrl : user?.avatar;

  return (
    <Wrapper width={width} height={height}>
      <TouchableEl onPress={onAvatarPress}>
        <AvatarContainer
          borderColor={borderColor}
          borderWidth={borderWidth}
          border={border}
          bg={bg}
          width={width}
          height={height}
        >
          {text ? (
            <Textt weight={600}>{text.toUpperCase()}</Textt>
          ) : (
            <Fragment>
              {isAvatar && type === 'avatar' ? (
                <Img
                  width={width}
                  height={height}
                  style={{
                    resizeMode: 'contain',
                  }}
                  source={{ uri: url }}
                />
              ) : (
                <RenderUserAvatar avatarName={avatarName} />
              )}
            </Fragment>
          )}
        </AvatarContainer>
      </TouchableEl>
      {editable && (
        <Touchable onPress={() => onEditPress()}>
          <CameraIcon />
        </Touchable>
      )}
    </Wrapper>
  );
};

export default UserAvatar;
