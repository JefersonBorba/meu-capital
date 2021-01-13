import styled from "styled-components";

export const Container = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #141432;
    width: 55vw;
    height: 60vh;
    border-radius: 30px;
    margin: 30px;
    h3{
        color: white;
    }
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        width: 80vw;
        height: 100%;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
   }
   @media only screen and (max-width: 500px) {
    width: 60vw;
}
`;

export const GraphContainer = styled.div`
    width: 60%
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
   }
`;

export const ExpensesContainer = styled.div`
    width: 40%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p{
        color: white;
    }
`;

export const Income = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 70px;
    background-color: #1b1a43;
    border-radius: 10px;
    @media only screen and (max-width: 600px) {
        width: 50vw;
    }
`;

export const Outcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    width: 80%;
    height: 70px;
    background-color: #1b1a43;
    border-radius: 10px;
    margin: 10px;
    @media only screen and (max-width: 600px) {
        width: 50vw;
    }
`;
export const Value = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    div{
        width: 40px;
        height: 40px;
    }
    h2{
        color: white
    }
    .up{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #5CC567;
        border-radius: 10px;
    }
    .down{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #524EEE;
        border-radius: 10px;
    }
`;