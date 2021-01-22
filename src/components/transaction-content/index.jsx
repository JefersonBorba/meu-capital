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
const ContentTransaction = () => {
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

  console.log(userData[3].data);
  return (
    <Container style={{ width: width < 700 && "75vw" }}>
      <Header>
        <h2>Despesas</h2>
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
          transaction
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
          transaction
        />
      )}
      {modalRemove && (
        <RemoveConfirmation
          width={width}
          setModalRemove={setModalRemove}
          currentItemId={currentItemId}
          transaction
        />
      )}
      {userData[3].data.length === 0 ? (
        <div style={{ margin: 50 }}>
          <h3>Nenhuma despesa cadastrada!</h3>
        </div>
      ) : (
        userData[3].data.map((data, index) => {
          return (
            <GoalItem key={index}>
              <CategoryName style={{ flexDirection: width < 400 && "column" }}>
                <img src={iconsProvider[1]} alt={data.name} />
                <h3>{data.category}</h3>
              </CategoryName>
              <RightContainer>
                <CashAvailable>
                  <p>Gasto</p>
                  <h3>{data.value},00</h3>
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
        })
      )}
    </Container>
  );
};

export default ContentTransaction;
