import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Breakable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2%;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;