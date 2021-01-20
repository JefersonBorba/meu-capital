import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {iconsProvider} from "../../assets/iconsProvider"
import {
  Container,
  GoalItem,
  RightContainer,
  Button,
  CashAvailable,
  CategoryName,
  Header,
  AddGoal,
  PopoverItem,
  Modal,
} from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import SelectCategory from "../modal-select-category"
import SetValue from "../modal-set-value";
const GoalsList = () => {
  const [modalAddCategory, setModalAddCategory] = useState(false);
  const [modalAddValue, setModalAddValue] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  const selectUser = state => state.user;
  const userData = useSelector(selectUser);
  console.log(iconsProvider)
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const handleCategorySelected = (name) => {
    setModalAddCategory(false);
    setModalAddValue(true);
    setCurrentItem({ category: name });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Container style={{ width: width < 700 && "75vw" }}>
      <Header>
        <h2>Metas</h2>
        <AddGoal onClick={() => setModalAddCategory(true)}>
          <AiOutlinePlus fill="white" size="30" cursor="pointer" />
        </AddGoal>
      </Header>
      {modalAddCategory && 
      <SelectCategory 
      currentItem={currentItem}
      handleCategorySelected={handleCategorySelected} 
      width={width}
      showCategories={showCategories}
      setShowCategories={setShowCategories}
      setModalAddCategory={setModalAddCategory}
      />}
      {modalAddValue && (
        <SetValue width={width} currentItem={currentItem} setModalAddValue={setModalAddValue} />
      )}
      {userData[2].data.map((data) => (
        <GoalItem>
          <CategoryName style={{ flexDirection: width < 400 && "column" }}>
            <img src={iconsProvider[1]} alt={data.name} />
            <h3>{data.name}</h3>
          </CategoryName>
          <RightContainer>
            <CashAvailable>
              <p>Disponível</p>
              <h3>{data.available},00</h3>
              <p>{data.spent},00</p>
            </CashAvailable>
            <BsThreeDotsVertical
              cursor="pointer"
              onClick={handleClick}
              size="25"
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography>
                <PopoverItem>Editar</PopoverItem>
                <PopoverItem>Remover</PopoverItem>
              </Typography>
            </Popover>
          </RightContainer>
        </GoalItem>
      ))}
    </Container>
  );
};

export default GoalsList;
