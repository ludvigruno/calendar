import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/event-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
