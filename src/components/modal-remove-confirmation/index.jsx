import { Modal, Button } from "./style"
import { IoMdClose } from "react-icons/io";

const RemoveConfirmation = ({width, setModalRemove}) => {
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
          <Button onClick={() => setModalRemove(false)}>
            <h2>Remover</h2>
          </Button>
        </Modal>
    )
}

export default RemoveConfirmation;