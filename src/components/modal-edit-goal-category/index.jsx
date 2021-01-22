import { IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { Modal, GoalItem, CategoryName } from "./style";
import { categories } from "../../helpers/categories";

const EditGoalCategory = ({
  width,
  setModalEditCategory,
  showCategories,
  handleCategoryEdit,
  currentItem,
  setShowCategories,
}) => {
  return (
    <Modal
      style={{ width: width < 450 && "80vw" }}
      className={showCategories ? "showCategories" : "dontShowCategories"}
    >
      <IoMdClose
        onClick={() => setModalEditCategory(false)}
        fill="white"
        size="20px"
        style={{ right: "10px", top: "10px", position: "absolute" }}
        cursor="pointer"
      />
      <h3>Nova Meta</h3>
      <h2>Selecione uma Categoria</h2>
      {!showCategories && (
        <GoalItem
          onClick={() => {
            handleCategoryEdit("Educação");
          }}
        >
          <CategoryName>
            <img src={categories[0].categoryicon} alt={categories[0].name} />
            <h3>{categories[0].name}</h3>
          </CategoryName>
        </GoalItem>
      )}
      {showCategories &&
        categories.map((data) => (
          <GoalItem
            onClick={() => {
              handleCategoryEdit(data.name);
            }}
          >
            <CategoryName>
              <img src={data.categoryicon} alt={data.name} />
              <h3>{data.name}</h3>
            </CategoryName>
          </GoalItem>
        ))}
      <RiArrowDownSLine
        fill="white"
        size="40px"
        cursor="pointer"
        onClick={() => {
          showCategories ? setShowCategories(false) : setShowCategories(true);
        }}
        style={{
          transform: showCategories && "rotate(180deg)",
          transition: "transform .5s",
        }}
      />
    </Modal>
  );
};

export default EditGoalCategory;
