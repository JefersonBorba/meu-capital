import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { iconsProvider } from "../../assets/iconsProvider";
import {
  Container,
  GoalItem,
  RightContainer,
  CashAvailable,
  CategoryName,
  Header,
  AddGoal,
  ButtonContainer,
} from "./style";
import { AiOutlinePlus } from "react-icons/ai";

import SelectCategory from "../modal-select-category";
import SetValue from "../modal-set-value";
import RemoveConfirmation from "../modal-remove-confirmation";
import EditGoalCategory from "../modal-edit-goal-category";
import EditValue from "../modal-edit-goal-value";
const GoalsList = () => {
  const [modalAddCategory, setModalAddCategory] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [modalAddValue, setModalAddValue] = useState(false);
  const [modalEditValue, setModalEditValue] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentItemId, setCurrentItemId] = useState();

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const handleCategorySelected = (name) => {
    setModalAddCategory(false);
    setModalAddValue(true);
    setCurrentItem({ category: name });
  };
  const handleCategoryEdit = (name) => {
    setModalEditCategory(false);
    setModalEditValue(true);
    setCurrentItem({ category: name });
  };

  return (
    <Container style={{ width: width < 700 && "75vw" }}>
      <Header>
        <h2>Metas</h2>
        <AddGoal onClick={() => setModalAddCategory(true)}>
          <AiOutlinePlus fill="white" size="30" cursor="pointer" />
        </AddGoal>
      </Header>
      {modalAddCategory && (
        <SelectCategory
          currentItem={currentItem}
          handleCategorySelected={handleCategorySelected}
          width={width}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
          setModalAddCategory={setModalAddCategory}
        />
      )}
      {modalAddValue && (
        <SetValue
          width={width}
          currentItem={currentItem}
          setModalAddValue={setModalAddValue}
          goals
        />
      )}
      {modalEditCategory && (
        <EditGoalCategory
          currentItem={currentItem}
          handleCategoryEdit={handleCategoryEdit}
          width={width}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
          setModalEditCategory={setModalEditCategory}
        />
      )}
      {modalEditValue && (
        <EditValue
          width={width}
          currentItem={currentItem}
          currentItemId={currentItemId}
          setModalEditValue={setModalEditValue}
        />
      )}
      {modalRemove && (
        <RemoveConfirmation
          width={width}
          setModalRemove={setModalRemove}
          currentItemId={currentItemId}
        />
      )}
      {userData[2].data.map((data, index) => {
        return (
          <GoalItem key={index}>
            <CategoryName style={{ flexDirection: width < 400 && "column" }}>
              <img src={iconsProvider[1]} alt={data.name} />
              <h3>{data.name}</h3>
            </CategoryName>
            <RightContainer>
              <CashAvailable>
                <p>Disponível</p>
                <h3>{data.available},00</h3>
                <p>
                  {userData[3].data
                    .filter((userData) => userData.category === data.name)
                    .reduce((acc, curr) => acc + curr.value, 0)}
                  ,00
                </p>
              </CashAvailable>
              <ButtonContainer>
                <button
                  className="edit"
                  onClick={() => {
                    setCurrentItemId(data.id);
                    setModalEditCategory(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="remove"
                  onClick={() => {
                    setCurrentItemId(data.id);
                    setModalRemove(true);
                  }}
                >
                  Delete
                </button>
              </ButtonContainer>
            </RightContainer>
          </GoalItem>
        );
      })}
    </Container>
  );
};

export default GoalsList;
