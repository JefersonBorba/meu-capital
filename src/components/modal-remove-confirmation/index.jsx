import { Modal, Button } from "./style";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "../../store/modules/authenticated-user/thunk";

const RemoveConfirmation = ({
  width,
  setModalRemove,
  currentItemId,
  transaction = false,
}) => {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("accessToken");

  const goalsUrl = `https://meucapital.herokuapp.com/goals/${currentItemId}`;
  const spentUrl = `https://meucapital.herokuapp.com/spentByCategory/${currentItemId}`;

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleClick = () => {
    if (transaction) {
      axios
        .delete(spentUrl, header)
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.error(err));
    } else {
      axios
        .delete(goalsUrl, header)
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Modal style={{ height: "40vh", width: width < 450 && "80vw" }}>
      <IoMdClose
        onClick={() => setModalRemove(false)}
        fill="white"
        size="20px"
        style={{ right: "10px", top: "10px", position: "absolute" }}
        cursor="pointer"
      />
      <h2>Tem certeza que deseja remover?</h2>
      <Button
        onClick={() => {
          handleClick();
          setModalRemove(false);
        }}
      >
        <h2>Remover</h2>
      </Button>
    </Modal>
  );
};

export default RemoveConfirmation;
