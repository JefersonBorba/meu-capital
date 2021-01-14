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
      dispatch(userAllowed(true));
      let decoded = jwt_decode(token);
      axios
        .get(`https://meucapital.herokuapp.com/users/${decoded.sub}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          dispatch(authenticatedUser(response.data));
          console.log(response.data);
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
