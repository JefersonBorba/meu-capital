import styled from "styled-components";

export const Container = styled.div`
    background-color: #141432;
    width: 55vw;
    height: 60vh;
    border-radius: 30px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    transition: max-height 3s linear, min-height 3s linear;
    .showCategories{
        overflow: hidden;
        min-height: 500px;
    }
    .dontShowCategories{
        min-height: 300px;
    }
`;
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
export const RightContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    p{
        font-size: 12px;
    }
`;
export const CashAvailable = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    p{
        font-size: 12px;
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
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 50px;
`;
export const AddGoal = styled.div`
    width: 30px;
    height: 30px;
    background-color: #5cc567;
    border-radius: 50%;
`;
export const PopoverItem = styled.h3`
    background-color: #1d1d42;
    padding: 8px;
    color: white;
    :hover{
        cursor: pointer;
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
        width: 250px;
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
export const Button = styled.div`
    width: 250px;
    height: 50px;
    background-color: #6dfa7b;
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;