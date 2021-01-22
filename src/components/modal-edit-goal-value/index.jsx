import { Modal } from "./style";
import { IoMdClose } from "react-icons/io";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "../../store/modules/authenticated-user/thunk";

const SetValue = ({
  width,
  currentItem,
  setModalEditValue,
  currentItemId,
  transaction = false,
}) => {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("accessToken");

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const schema = yup.object().shape({
    goal: yup.number().typeError().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const goalsUrl = `https://meucapital.herokuapp.com/goals/${currentItemId}`;
  const spentUrl = `https://meucapital.herokuapp.com/spentByCategory/${currentItemId}`;

  const handleForm = (data) => {
    if (transaction) {
      axios
        .patch(
          spentUrl,
          {
            category: currentItem.category,
            value: data.goal,
          },
          header
        )
        .then((res) => {
          setModalEditValue(false);
        })
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.error(err));
    } else {
      axios
        .patch(
          goalsUrl,
          {
            name: currentItem.category,
            available: data.goal,
          },
          header
        )
        .then((res) => {
          console.error(res);
          setModalEditValue(false);
        })
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Modal style={{ height: "40vh", width: width < 450 && "80vw" }}>
      <IoMdClose
        onClick={() => setModalEditValue(false)}
        fill="white"
        size="20px"
        style={{ right: "10px", top: "10px", position: "absolute" }}
        cursor="pointer"
      />
      <h3>
        {currentItem.category
          ? currentItem.category
          : "Categoria não selecionada"}
      </h3>
      <h2>Selecione um novo valor</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          ref={register}
          name="goal"
          id="goal"
          type="text"
          placeholder="R$ 00,00"
        />
        {errors.saldo && <p className="error">{errors.saldo.message}</p>}
        <button>
          <h2>Salvar</h2>
        </button>
      </form>
    </Modal>
  );
};

export default SetValue;
