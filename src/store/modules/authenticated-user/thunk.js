import axios from "axios";
import { authenticatedUser, userAllowed } from "./actions";
import jwt_decode from "jwt-decode";

export const authenticatedUserThunk = (data, history) => (
  dispatch,
  _getState
) => {
  return axios
    .post(`https://meucapital.herokuapp.com/login`, data)
    .then((res) => {
      let token = res.data.accessToken;
      window.localStorage.setItem("accessToken", token);
      let decoded = jwt_decode(token);

      const urlWallet = "https://meucapital.herokuapp.com/wallet";
      const urlGoals = "https://meucapital.herokuapp.com/goals";

      axios
        .get(`https://meucapital.herokuapp.com/users/${decoded.sub}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          dispatch(userAllowed(true));
          dispatch(authenticatedUser(response.data));
          history.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
