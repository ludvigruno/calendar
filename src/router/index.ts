import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  element: string;
  exact?: boolean;
  key: string;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRotes = [
  {
    path: RouteNames.LOGIN,
    element: Login,
    exact: true,
    key: RouteNames.LOGIN,
  },
];
export const privateRotes = [
  {
    path: RouteNames.EVENT,
    element: Event,
    exact: true,
    key: RouteNames.EVENT,
  },
];
