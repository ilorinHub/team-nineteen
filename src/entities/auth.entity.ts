import { entity, persistence } from "simpler-state";
import { remoteStorage } from "./entityHelpers";

export type TUser = {
  id: string;
  email: string;
  fullName: string;
};

export type IAuthEntity = {
  token: null | string;
  user: TUser | null;
};

const defaultState: IAuthEntity = {
  token: null,
  user: null,
};

console.log("starting");

export const authEntity = entity(defaultState, [
  persistence("phalanxAuth", {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === "null" ? {} : JSON.parse(val)),
  }),
]);
console.log("passed");

export const setAuth = (user: any, token: any) =>
  authEntity.set((currentData: any) => ({
    ...currentData,
    user,
    token,
  }));

export const setToken = (token: string) =>
  authEntity.set((auth: any) => ({
    ...auth,
    token,
  }));

export const setUser = (user: any) =>
  authEntity.set((auth: any) => ({
    ...auth,
    user,
  }));

export const setAuthToDefault = () => {
  console.log("calleddddd");
  authEntity.set(defaultState);
};

export const clearAuth = () => {
  authEntity.set((currentData: any) => ({
    ...currentData,
    user: null,
    token: null,
    refresh: null,
  }));
};

export const useAuth = () => {
  const auth: IAuthEntity = authEntity.use();
  return {
    isLoggedIn: Boolean(auth?.token && auth?.user),
    user: auth?.user,
    token: auth?.token,
  };
};
