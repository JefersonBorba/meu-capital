import styled from "styled-components";


export const GoalItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #2e2e64;
    width: 82%;
    margin: 5px;
    height: 70px;
    border-radius: 10px;
    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`;
export const CategoryName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    h3{
        margin-left: 10px;
    }
`;
export const Modal = styled.div`
    z-index: 1;
    position: absolute;
    width: 400px;
    // min-height: 300px;
    transition: min-height .5s ease;
    background-color: #141432;
    color: white;
    box-shadow: 5px 5px 20px 10px #100916;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    input{
        width: 75%;
        height: 50px;
        border-radius: 20px;
        border: 0;
        background-color: #08081b;
        color: #37395a;
        text-align: center;
        font-size: 20px;
    }
    div:hover{
        cursor:pointer;
    }
`;