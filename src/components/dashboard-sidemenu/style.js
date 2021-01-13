import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width: 900px) {
           width: 80px;
      }
`;
export const MenuItem = styled.div`
    border-radius: 10px;
    padding-left: 20px;
    width: 90%;
    height: 40px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: background-color .5s;
    h3{
        margin-left: 10px;
    }
    :hover{
        cursor: pointer;
        background-color: #2E2E64;
    }
`;