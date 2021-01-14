import { USER_LOGIN } from "./actions-type";
import { USER_ALLOWED } from "./actions-type";

export const authenticatedUser = (user) => ({
  type: USER_LOGIN,
  user,
});

export const userAllowed = (isAllowed) => ({
  type: USER_ALLOWED,
  isAllowed,
});
