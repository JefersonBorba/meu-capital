import { ImageContainer } from "./styles";
import LoginImage from "../../assets/img/login.svg";
import RegisterImage from "../../assets/img/register.svg";

const SideImage = ({ type }) => {
  const TypeDecider = (type) => {
    switch (type) {
      case "login":
        return <img src={LoginImage} alt="Login" />;

      case "register":
        return <img src={RegisterImage} alt="Login" />;

      default:
        return null;
    }
  };
  return <ImageContainer>{TypeDecider(type)}</ImageContainer>;
};

export default SideImage;
