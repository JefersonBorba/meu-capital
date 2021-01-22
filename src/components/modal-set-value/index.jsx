import { Modal } from "./style";
import { IoMdClose } from "react-icons/io";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "../../store/modules/authenticated-user/thunk";

const SetValue = ({
  width,
  currentItem,
  setModalAddValue,
  wallet = false,
  goals = false,
  transaction = false,
}) => {
  const dispatch = useDispatch();
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);

  const currentBalance = userData[1].data[0].saldo;
  const walletId = userData[1].data[0].id;

  const walletUrl = `https://meucapital.herokuapp.com/wallet/${walletId}`;
  const goalsUrl = `https://meucapital.herokuapp.com/goals/`;
  const spentUrl = `https://meucapital.herokuapp.com/spentByCategory/`;

  let token = window.localStorage.getItem("accessToken");
  let decoded = jwt_decode(token);

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const schema = yup.object().shape({
    saldo: yup.number().typeError().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    if (goals) {
      axios
        .post(
          goalsUrl,
          {
            name: currentItem.category,
            available: data.saldo,
            spent: 0,
            userId: `${decoded.sub}`,
          },
          header
        )
        .then((res) => {
          console.log(res);
          setModalAddValue(false);
        })
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.log(err));
    }

    if (transaction) {
      axios
        .post(
          spentUrl,
          {
            category: currentItem.category,
            value: data.saldo,
            userId: `${decoded.sub}`,
          },
          header
        )
        .then((res) => {
          console.log(res);
          setModalAddValue(false);
        })
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.log(err));
    }

    if (wallet) {
      const newBalance = data.saldo + currentBalance;

      console.log(newBalance);

      axios
        .patch(walletUrl, { saldo: newBalance }, header)
        .then((res) => {
          console.log(res);
          setModalAddValue(false);
        })
        .then(() => dispatch(refreshUserThunk()))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal style={{ height: "40vh", width: width < 450 && "80vw" }}>
      <IoMdClose
        onClick={() => setModalAddValue(false)}
        fill="white"
        size="20px"
        style={{ right: "10px", top: "10px", position: "absolute" }}
        cursor="pointer"
      />
      <h3>{currentItem.category && currentItem.category}</h3>
      <h2>Defina um valor</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          ref={register}
          name="saldo"
          id="saldo"
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
