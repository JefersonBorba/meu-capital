import { USER_LOGIN } from "./actions-type";
import { USER_ALLOWED } from "./actions-type";

export const authenticatedUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const { user } = action;
      return user;

    default:
      return state;
  }
};

export const userAllowedReducer = (state = false, action) => {
  switch (action.type) {
    case USER_ALLOWED:
      const { isAllowed } = action;
      return isAllowed;

    default:
      return state;
  }
};
