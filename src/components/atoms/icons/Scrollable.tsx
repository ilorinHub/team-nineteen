import React, { ReactNode } from "react";
import styled, { css } from "styled-components/native";
import { RefreshControl } from "react-native";

const ScrollableStyle = styled.ScrollView``;
const Grow = styled.View<{ isHorizontal: boolean }>`
  flex: 1;
  ${(props) =>
    props.isHorizontal &&
    css`
      flex: none;
    `}
`;

const Scrollable = ({
  children,
  vSpace = 0,
  hSpace = 0,
  horizontal = false,
  vIndicator = false,
  hIndicator = false,
  paddingHorizontal = 0,
  refreshing = false,
  onRefresh,
}: {
  children: ReactNode;
  vSpace?: number;
  hSpace?: number;
  horizontal?: boolean;
  vIndicator?: boolean;
  hIndicator?: boolean;
  paddingHorizontal?: number;
  refreshing?: boolean;
  onRefresh?: () => void;
}) => {
  return (
    <Grow isHorizontal={horizontal}>
      <ScrollableStyle
        showsVerticalScrollIndicator={vIndicator}
        showsHorizontalScrollIndicator={hIndicator}
        contentContainerStyle={{
          paddingBottom: vSpace ? vSpace : 0,
          paddingRight: hSpace ? hSpace : 0,
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 0,
        }}
        horizontal={horizontal}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh?.()}
          />
        }
      >
        {children}
      </ScrollableStyle>
    </Grow>
  );
};

export default Scrollable;
