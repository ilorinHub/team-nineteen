type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appThemes = {
  color: {
    phalanxYellow: "#febb1b",
    disabled: "#eaac19",
    phalanxBlack: "#373940",
    phalanxBlack2: "#232323",
    error: "#ff5a72",
  },
};
