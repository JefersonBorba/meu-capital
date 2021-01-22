import { StyledDiv } from "./styles";
import abdiel from "../../assets/team/abdiel.jpeg";
import eduardo from "../../assets/team/eduardo.jpeg";
import felipe from "../../assets/team/felipe.jpeg";
import jeferson from "../../assets/team/jeferson.jpeg";
import rafael from "../../assets/team/rafael.jpeg";

const HomeAvatar = () => {
  return (
    <StyledDiv>
      <div class="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>
        <div class="slides">
          <div id="slide-1">
            <img src={abdiel} alt="abdiel" />
            <span>Abdiel</span>
          </div>
          <div id="slide-2">
            <img src={eduardo} alt="eduardo" />
            <span>Eduardo</span>
          </div>
          <div id="slide-3">
            <img src={felipe} alt="felipe" />
            <span>Felipe</span>
          </div>
          <div id="slide-4">
            <img src={jeferson} alt="jeferson" />
            <span>Jeferson</span>
          </div>
          <div id="slide-5">
            <img src={rafael} alt="rafael" />
            <span>Rafael</span>
          </div>
        </div>
      </div>
      <div class="sliderBig">
        <div class="slides">
          <div id="slide-1">
            <img src={abdiel} alt="abdiel" />
            <span>Abdiel</span>
          </div>
          <div id="slide-2">
            <img src={eduardo} alt="eduardo" />
            <span>Eduardo</span>
          </div>
          <div id="slide-3">
            <img src={felipe} alt="felipe" />
            <span>Felipe</span>
          </div>
          <div id="slide-4">
            <img src={jeferson} alt="jeferson" />
            <span>Jeferson</span>
          </div>
          <div id="slide-5">
            <img src={rafael} alt="rafael" />
            <span>Rafael</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default HomeAvatar;
