import { USER_LOGIN } from "./actions-type";
import { USER_ALLOWED } from "./actions-type";
import { USER_LOGIN_FAILED } from "./actions-type";

export const authenticatedUser = (user) => ({
  type: USER_LOGIN,
  user,
});

export const userAllowed = (isAllowed) => ({
  type: USER_ALLOWED,
  isAllowed,
});

export const userLoginFailed = (loginFailed) => ({
  type: USER_LOGIN_FAILED,
  loginFailed,
});