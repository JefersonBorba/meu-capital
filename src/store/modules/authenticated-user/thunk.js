import axios from "axios";
import { authenticatedUser, userAllowed, userLoginFailed } from "./actions";
import jwt_decode from "jwt-decode";

export const authenticatedUserThunk = (data, history) => (
  dispatch,
  _getState
) => {
  return axios
    .post(`https://meucapital.herokuapp.com/login`, data)
    .then((res) => {
      let token = res.data.accessToken;
      window.localStorage.setItem("accessToken", token)
      ;
      let decoded = jwt_decode(token);

      const header = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const urlUser = `https://meucapital.herokuapp.com/users/${decoded.sub}`;
      const urlWallet = `https://meucapital.herokuapp.com/wallet?userId=${decoded.sub}`;
      const urlGoals = `https://meucapital.herokuapp.com/goals?userId=${decoded.sub}`;
      const urlSpentByCategory = `https://meucapital.herokuapp.com/spentByCategory?userId=${decoded.sub}`;

      axios
        .all([
          axios.get(urlUser, header),
          axios.get(urlWallet, header),
          axios.get(urlGoals, header),
          axios.get(urlSpentByCategory, header),
        ])
        .then((responseArr) => {
          console.log(responseArr);
          dispatch(userAllowed(true));
          dispatch(authenticatedUser(responseArr));
          history.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        })

    })
    .catch((err) => {
      dispatch(userLoginFailed(true))
      console.error(err);
    });
};
