import styled, { css } from 'styled-components/native';

export const Textt = styled.Text<{
  color?: string;
  size?: string;
  weight?: number;
  align?: 'left' | 'right' | 'center';
  mt?: string;
  mb?: string;
  mh?: string;
  mv?: string;
  lineHeight?: string;
  mr?: string;
  ml?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  ph?: string;
  pv?: string;
}>`
  font-size: ${({ size }) => size || '16px'};
  color: ${({ color }) => color || '#000'};
  font-weight: ${({ weight }) => weight || 400};
  text-align: ${({ align }) => align || 'left'};
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  ${({ mh }) =>
    mh &&
    css`
      margin-horizontal: ${mh};
    `}
  ${({ mv }) =>
    mv &&
    css`
      margin-vertical: ${mv};
    `}
  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `}
  ${({ ph }) =>
    ph &&
    css`
      padding-horizontal: ${ph};
    `}
  ${({ pv }) =>
    pv &&
    css`
      padding-vertical: ${pv};
    `}
`;
