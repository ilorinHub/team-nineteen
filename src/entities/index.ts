import { entity } from "simpler-state";

type TCaller =
  | "login"
  | "register"
  | "email-verify"
  | "forgot-password"
  | "password-reset"
  | null;

type IState = {
  isRequesting: {
    status: boolean;
    caller?: TCaller;
  };
};

const defaultState: IState = {
  isRequesting: {
    caller: null,
    status: false,
  },
};

export const fleetEntity = entity(defaultState);

export const requestStarted = (caller?: TCaller) =>
  fleetEntity.set((currentState: any) => ({
    ...currentState,

    isRequesting: {
      status: true,
      caller,
    },
  }));

export const requestEnded = () =>
  fleetEntity.set((currentState: any) => ({
    ...currentState,

    isRequesting: {
      status: false,

      caller: null,
    },
  }));

export const isRequesting = (caller: TCaller) => {
  const { isRequesting } = fleetEntity.use();

  return isRequesting.status && isRequesting.caller === caller;
};
