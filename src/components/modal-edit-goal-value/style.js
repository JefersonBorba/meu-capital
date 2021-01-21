import styled from "styled-components";

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
        width: 100%;
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
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        background-color: #5cc567;
        border: none;
        height: 7vh;
        width: 10vw;
        color: white;
        font-weight: bold;
        margin: 4px;
        border-radius: 3px;
        margin-top: 10px;
        box-shadow: 2px 2px 3px black;
        transition: box-shadow .5s;
        :hover{
            box-shadow: 3px 3px 4px black;
            cursor: pointer;
            
    }
    }
`;