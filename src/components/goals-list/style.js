import styled from "styled-components";

export const Container = styled.div`
  background-color: #141432;
  width: 96%;
  height: 60vh;
  border-radius: 30px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  transition: max-height 3s linear, min-height 3s linear;
  .showCategories {
    overflow: hidden;
    min-height: 500px;
  }
  .dontShowCategories {
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
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  p {
    font-size: 12px;
  }
`;
export const CashAvailable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  p {
    font-size: 12px;
  }
`;
export const CategoryName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  h3 {
    margin-left: 10px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 82%;
  height: 50px;
`;
export const AddGoal = styled.div`
  width: 30px;
  height: 30px;
  background-color: #5cc567;
  border-radius: 50%;
`;
export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .edit{
    background-color: #5cc567;
    border: none;
    height: 25px;
    color: white;
    font-weight: bold;
    margin: 4px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px black;
    transition: box-shadow .5s;
    :hover{
      box-shadow: 3px 3px 4px black;
      cursor: pointer;
    }
  }
  .remove{
    background-color: #E9666D;
    border: none;
    height: 25px;
    width: 70px;
    color: white;
    font-weight: bold;
    margin: 4px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px black;
    transition: box-shadow .5s;
    :hover{
      box-shadow: 3px 3px 4px black;
      cursor: pointer;
    }
  }
`;
