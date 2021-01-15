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
    border-radius: 10px;
    background: lightgrey;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: #183161;
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
      width: 360px;
    }

    .slides > div {
      width: 360px;
      height: 360px;
    }
  }

  @media (min-width: 768px) {
    .slider {
      width: 460px;
    }

    .slides > div {
      width: 460px;
      height: 460px;
    }
  }

  @media (min-width: 1024px) {
    .slider {
      width: 530px;
    }

    .slides > div {
      width: 530px;
      height: 530px;
    }
  }

  @media (min-width: 1360px) {
    .slider {
      width: 660px;
    }

    .slides > div {
      width: 660px;
      height: 660px;
    }
  }
`;
