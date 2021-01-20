import { Modal, Button } from "./style"
import { IoMdClose } from "react-icons/io";

const SetValue = ({width, currentItem, setModalEditValue}) => {
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
          <input placeholder="R$ 00,00"></input>
          <Button onClick={() => setModalEditValue(false)}>
            <h2>Salvar</h2>
          </Button>
        </Modal>
    )
}

export default SetValue;