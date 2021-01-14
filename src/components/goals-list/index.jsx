import {useState} from "react";
import {Container, GoalItem, RightContainer, Button, CashAvailable, CategoryName, Header, AddGoal, PopoverItem, Modal } from "./style"
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const GoalsList = () => {
    const [modalAddCategory, setModalAddCategory] = useState(false)
    const [modalAddValue, setModalAddValue] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentItem, setCurrentItem] = useState([])
    const [data, setData] = useState([
        {
            name: 'Alimentação', available: 4000, spent: 2400, categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
        {
            name: 'Transporte', available: 4000, spent: 2400, categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
        {
            name: 'Educação', available: 4000, spent: 2400, categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
      ])
    const handleCategorySelected = (name) => {
        setModalAddCategory(false);
        setModalAddValue(true);
        setCurrentItem({category:name})
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const categories = [
        {
            name: 'Alimentação', categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
        {
            name: 'Transporte', categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
        {
            name: 'Outros', categoryicon: "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        },
      ];
    return <Container>
        <Header>
            <h2>Metas</h2>
            <AddGoal onClick={() => setModalAddCategory(true)}><AiOutlinePlus fill="white" size="30" cursor="pointer"/></AddGoal>
        </Header>
        {modalAddCategory && <Modal className={showCategories ? "showCategories" : "dontShowCategories"}>
            <IoMdClose onClick={() => setModalAddCategory(false)} fill="white" size="20px" style={{right: "10px", top:"10px", position:"absolute"}} cursor="pointer"/>
            <h3 >Nova Meta</h3>
            <h2>Selecione uma Categoria</h2>
            <GoalItem onClick={() => {handleCategorySelected("Educação")
            console.log(currentItem)}}>
                <CategoryName>
                    <img src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png" alt="educação"/>
                    <h3>Educação</h3>
                </CategoryName>
            </GoalItem >
            {showCategories && categories.map((data) => (<GoalItem onClick={() => {handleCategorySelected(data.name)
            console.log(currentItem)}}>
                <CategoryName>
                    <img src={data.categoryicon} alt={data.name}/>
                    <h3>{data.name}</h3>
                </CategoryName>
            </GoalItem>))}
            <RiArrowDownSLine fill="white" size="40px" cursor="pointer" onClick={() => {
                showCategories ? setShowCategories(false) : setShowCategories(true);
            }} style={{transform: showCategories && "rotate(180deg)", transition: "transform .5s"}}/>
        </Modal>}
        {modalAddValue && <Modal style={{height: "40vh"}}>
            <IoMdClose onClick={() => setModalAddValue(false)} fill="white" size="20px" style={{right: "10px", top:"10px", position:"absolute"}} cursor="pointer"/>
            <h3 >{currentItem.category ? currentItem.category : "Categoria não selecionada"}</h3>
            <h2>Defina um valor</h2>
            <input placeholder="R$ 00,00"></input>
            <Button onClick={() => setModalAddValue(false)}>
                <h2>Salvar</h2>
            </ Button>
        </Modal>}
        {data.map((data) => (<GoalItem>
            <CategoryName>
                <img src={data.categoryicon} alt={data.name}/>
                <h3>{data.name}</h3>
            </CategoryName>
            <RightContainer>
                <CashAvailable>
                    <p>Disponível</p>
                    <h3>{data.available}</h3>
                    <p>{data.spent}</p>
                </CashAvailable>
                <BsThreeDotsVertical cursor="pointer" onClick={handleClick} size="25"/>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}>
                    <Typography >
                        <PopoverItem>Editar</PopoverItem>
                        <PopoverItem>Remover</PopoverItem>
                    </Typography>
                </Popover>
            </RightContainer>
        </GoalItem>))}
    </Container>
}

export default GoalsList;