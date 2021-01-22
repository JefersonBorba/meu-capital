import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  margin: 50px 0;

  .slider {
    width: 260px;
    text-align: center;
    overflow: hidden;
  }

  .sliderBig {
    display: none;
  }

  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .slides::-webkit-scrollbar-thumb {
    background: #183161;
    border-radius: 10px;
  }

  .slides::-webkit-scrollbar-track {
    background: transparent;
  }

  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 260px;
    height: 260px;
    margin-right: 50px;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #183161;

    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%);
    }

    span {
      font-size: 24px;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translate(-50%);
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slider > a {
    display: inline-flex;
    width: 2.5rem;
    height: 2.5rem;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0.5rem;
    position: relative;
    background: #1d1d42;
    color: white;
  }

  .slider > a:focus {
    background: #183161;
  }

  @media (min-width: 425px) {
    .slider {
      width: 330px;
    }

    .slides > div {
      width: 330px;
      height: 330px;

      img {
        width: 290px;
        height: 290px;
      }
    }
  }

  @media (min-width: 1024px) {
    .slider {
      display: none;
    }

    .sliderBig {
      display: flex;
    }

    .slides {
      display: flex;
      width: 100%;
      align-items: space-around;
    }

    .slides > div {
      width: 18vw;
      height: 18vw;
      margin: 0 10px;
      position: relative;
      border-radius: 0;
      background: none;

      img {
        width: 15vw;
        height: 15vw;
      }

      span {
        bottom: 0;
      }
    }
  }
`;
